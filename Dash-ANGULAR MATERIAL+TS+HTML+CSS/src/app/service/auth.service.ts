import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/userLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient ) { }

  cadastro( user:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${environment.server}/usuarios/cadastrar`,user)
  }

  entrar(userLogin:UserLogin): Observable<UserLogin>{
      return this.http.post<UserLogin>(`${environment.server}/usuarios/logar`, userLogin)
    }

    getByIdUSer(id: number): Observable<Usuario>{
      return this.http.get<Usuario>(`${environment.server}/usuarios/${id}`)
    }

    logado (){
      let ok: boolean = false
      if(localStorage.getItem('token') != null) {
        ok = true
      }
      return ok
    }

    produtor(){
      let ok: boolean =false
      if(environment.tipo == 'produtor'){
        ok =true
      }
      return ok
    }

    cliente(){
      let ok: boolean =false
      if(environment.tipo == 'cliente'){
        ok =true
      }
      return ok
    }

    administrador(){
      let ok: boolean =false
      if(environment.tipo == 'admin'){
        ok =true
      }
      return ok
    }
 
}