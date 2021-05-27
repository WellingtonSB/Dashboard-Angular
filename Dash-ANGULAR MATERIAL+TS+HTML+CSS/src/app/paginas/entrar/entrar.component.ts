import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/model/userLogin';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    public auth: AuthService,
    public router: Router,
    public alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp

      environment.id = this.userLogin.id
      environment.nome = this.userLogin.nome
      environment.tipo = this.userLogin.tipoUsuario
      localStorage.setItem('token',this.userLogin.token) //environment.token = this.userLogin.token

      if(this.userLogin.tipoUsuario == 'produtor'){
        this.router.navigate(['/inicio-produtor'])
      }
      if(this.userLogin.tipoUsuario == 'cliente'){
        this.router.navigate(['/inicio-cliente'])
      }
      if(this.userLogin.tipoUsuario == 'admin'){
        this.router.navigate(['/admin'])
      }
    }, erro=>{
      if(erro.status == 500){
        this.alertas.showAlertDanger('Usuario ou senha incorreto!')
      }
    })
  }
}
