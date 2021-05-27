import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorias } from 'src/app/model/Categorias';
import { AlertasService } from 'src/app/service/alertas.service';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class DeletarCategoriaComponent implements OnInit {

  categoria: Categorias = new Categorias()
  idCategoria: number
  token = localStorage.getItem('token')

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private catService: CategoriaService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    if (this.token == null) {
      this.alertas.showAlertDanger('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/inicio'])
    }
    window.scroll(0, 0)
    this.idCategoria = this.route.snapshot.params['id']
    this.findByIdCategoria(this.idCategoria)
  }

  apagar() {
    this.catService.deleteCategoria(this.idCategoria).subscribe(() => {
      this.alertas.showAlertDanger('Categoria apagada com sucesso!')
      this.router.navigate(['/admin'])
    })
  }

  findByIdCategoria(id: number) {
    this.catService.getByIdCategoria(id).subscribe((resp: Categorias) => {
      this.categoria = resp
    })
  }

}

