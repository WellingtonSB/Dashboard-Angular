import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categorias } from '../model/Categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  constructor(private http: HttpClient){}

  token = {headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') || '')}

  getAllCategoria(): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(`${environment.server}/categorias`, this.token)
  }

  /* VAMOS PEGAR O TEMA RESPONSAVEL PELO ID */
  getByIdCategoria(id: number): Observable<Categorias> {
    return this.http.get<Categorias>(`${environment.server}/categorias/${id}`, this.token)
  }

  getByNomeCategoria(nome: string): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(`${environment.server}/categorias/nome/${nome}`, this.token)
  }

  postCategoria(categorias: Categorias): Observable<Categorias> {
    return this.http.post<Categorias>(`${environment.server}/categorias`, categorias, this.token)
  }

  putCategoria(categorias: Categorias): Observable<Categorias> {
    return this.http.put<Categorias>(`${environment.server}/categorias`, categorias, this.token)
  }

  deleteCategoria(id: number) {
    return this.http.delete(`${environment.server}/categorias/${id}`, this.token)
  }

  filtrarCategorias() {
    if (environment.catFilter == '') {
    }
  }

}
