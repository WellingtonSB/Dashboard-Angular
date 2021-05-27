import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorias } from 'src/app/model/Categorias';
import { Produtos } from 'src/app/model/Produtos';
import { AlertasService } from 'src/app/service/alertas.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class EditarProdutoComponent implements OnInit {

  produto: Produtos = new Produtos()
  idProduto:Produtos
  listaProdutos: Produtos[]

  categorias:Categorias = new Categorias()
  listaCategorias: Categorias[]
  idCategoria: number
  token = localStorage.getItem('token')

  constructor(
    private produtosService: ProdutoService,
    private router:Router,
    private route:ActivatedRoute,
    private categoriaService: CategoriaService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    if (this.token == null) {
      this.alertas.showAlertDanger('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/inicio'])
    }
    window.scroll(0, 0)
    let id = this.route.snapshot.params['id']
    this.idProduto = id
    this.findByIdProduto(id)
  }

  findByIdProduto(id:number){
    this.produtosService.getByIdProdutos(id).subscribe((resp:Produtos)=>{
      this.produto = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categorias) => {
      this.categorias = resp
    });
  }

  atualiza(){

      this.produtosService.putProduto(this.produto).subscribe((resp:Produtos)=>{
      this.produto = resp
      this.alertas.showAlertSuccess('Produto atualizado com sucesso!')
      this.router.navigate(['/cadastro-produto'])
    })
  }

}
