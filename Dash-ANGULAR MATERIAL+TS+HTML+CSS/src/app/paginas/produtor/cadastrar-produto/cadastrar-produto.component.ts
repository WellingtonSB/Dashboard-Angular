import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorias } from 'src/app/model/Categorias';
import { Produtos } from 'src/app/model/Produtos';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.scss']
})
export class CadastrarProdutoComponent implements OnInit {

  produto: Produtos = new Produtos()
  produtoUser: boolean = false
  idUser = environment.id
  categoria: Categorias = new Categorias()
  usuario: Usuario = new Usuario()
  nomeProduto: string


  token = localStorage.getItem('token')

  listaCategoria: Categorias[]
  listaProduto: Produtos[]
  idCategoria: number
  nomeCategoria: string

  key = 'data'
  reverse = true

  constructor(
    private router: Router,
    private auth: AuthService,
    private catService: CategoriaService,
    private prodService: ProdutoService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    if (this.token == null) {
      this.alertas.showAlertDanger('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/inicio'])
    }
    window.scroll(0, 0)
    this.findAllCategoria()
    //this.findByIdUsuario()
    this.findAllProdutos()
  }

  findAllCategoria() {
    this.catService.getAllCategoria().subscribe((resp: Categorias[]) => {
      this.listaCategoria = resp
    })
  }

  findAllProdutos(){
    this.prodService.getAllProduto().subscribe((resp: Produtos[])=>{
     this.listaProduto = resp
    })
  }

  findByIdCategoria() {
    this.catService.getByIdCategoria(this.idCategoria).subscribe((resp: Categorias) => {
      this.categoria = resp
    })
  }

  findByIdUsuario(){
      this.auth.getByIdUSer(this.idUser).subscribe((resp: Usuario)=>{
      this.usuario = resp
      this.produto = new Produtos()
    })
  }

  postarProduto() {
    this.categoria.id = this.idCategoria
    this.produto.categorias = this.categoria
    this.usuario.id = this.idUser
    this.produto.usuario = this.usuario
    console.log(this.produto)
    this.prodService.postProduto(this.produto).subscribe((resp: Produtos) => {
      this.produto = resp
      this.alertas.showAlertSuccess('Cadastro realizado com sucesso!')
      this.produto = new Produtos()
      this.router.navigate(['/inicio-produtor'])

    })
  }


  findByNomeProduto(){
      if(this.nomeProduto == '') {
        this.findAllProdutos()
      } else {
        this.prodService.getByNomeProduto(this.nomeProduto).subscribe((resp: Produtos[]) => {
          this.listaProduto = resp
        })
      }
  }

  findByNomeCategoria(){
    if(this.nomeProduto == '') {
      this.findAllCategoria()
    } else {
      this.catService.getByNomeCategoria(this.nomeCategoria).subscribe((resp: Categorias[]) => {
        this.listaCategoria = resp
      })
     }

}

}
