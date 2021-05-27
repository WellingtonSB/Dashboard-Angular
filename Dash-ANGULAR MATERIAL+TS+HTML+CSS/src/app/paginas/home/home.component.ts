import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  token = localStorage.getItem('token')

  constructor(
    private router:Router,
    private auth:AuthService
    //private alertas: AlertasService
  ) {}


  ngOnInit() {
    if (this.token == null) {
      //this.alertas.showAlertDanger('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/inicio'])
    }
    window.scroll(0, 0)
  }

}
