import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/model/Produtos';
import { AuthService } from 'src/app/service/auth.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class DeletarProdutoComponent implements OnInit {
  
  produtos: Produtos = new Produtos()
  idPost: number

  token = localStorage.getItem('token')

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtosService: ProdutoService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    if (this.token == null) {
      alert('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/inicio'])
    }
    window.scroll(0, 0)
    this.idPost = this.route.snapshot.params['id']
    this.findByIdProdutos(this.idPost)
  }

  findByIdProdutos(id: number) {
    this.produtosService.getByIdProdutos(id).subscribe((resp: Produtos) => {
      this.produtos = resp
    })
  }

  apagar() {
    this.produtosService.deleteProdutos(this.idPost).subscribe(() => {
      alert('Produto apagado com sucesso!')
      if(this.auth.administrador() == true){
        this.router.navigate(['/admin'])
      }else{
        this.router.navigate(['/cadastro-produto'])
      }

    })

  }


}
