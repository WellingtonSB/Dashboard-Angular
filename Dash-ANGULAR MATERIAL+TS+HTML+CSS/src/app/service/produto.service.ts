import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produtos } from '../model/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) {}

  token = {  headers: new HttpHeaders().set('Authorization',localStorage.getItem('token') || '')}

  getAllProduto(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(`${environment.server}/produtos`, this.token)
  }

  getByIdProdutos(id: number): Observable<Produtos> {
    return this.http.get<Produtos>(`${environment.server}/produtos/${id}`, this.token)
  }

  getByNomeProduto(nome: string): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(`${environment.server}/produtos/nome/${nome}`, this.token)
  }

  postProduto(produto: Produtos): Observable<Produtos> {
    return this.http.post<Produtos>(`${environment.server}/produtos`, produto, this.token)
  }

  putProduto(produto: Produtos): Observable<Produtos> {
    return this.http.put<Produtos>(`${environment.server}/produtos`, produto, this.token)
  }

  deleteProdutos(id: number) {
    return this.http.delete(`${environment.server}/produtos/${id}`, this.token)
  }
}
