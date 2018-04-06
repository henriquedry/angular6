import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../domain/categoria';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoriaService {

  constructor(private http : HttpClient) { }

  getCategoria() : Observable<Categoria[]>{
    return this.http.get<Categoria[]>('https://tcc-lojavirtual.herokuapp.com/categorias')
  }

}
