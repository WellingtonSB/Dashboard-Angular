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
export class EditarCategoriaComponent implements OnInit {

  categoria: Categorias = new Categorias()
  token = localStorage.getItem('token')

  constructor(
    private catService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    if (this.token == null) {
      this.alertas.showAlertDanger('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/inicio'])
    }
    window.scroll (0,0)
    let id = this.route.snapshot.params['id']
    this.findByIdTema(id)
  }

  findByIdTema(id: number){
    this.catService.getByIdCategoria(id).subscribe((resp: Categorias)=> {
      this.categoria = resp
    })
  }

  atualizar(){
    this.catService.putCategoria(this.categoria).subscribe((resp: Categorias)=>{
      this.categoria = resp
      this.alertas.showAlertSuccess('Categoria atualizada com sucesso')
      this.router.navigate(['/admin'])
    })
  }

}

