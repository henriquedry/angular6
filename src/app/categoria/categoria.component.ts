import { Component, OnInit } from '@angular/core';
import { Categoria } from '../domain/categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias : Categoria[]; //armazena os contratos do servidor remoto

  constructor(private categoriaService : CategoriaService) { 
    this.getCategorias();
  }
  

  ngOnInit() {
  }

  getCategorias(){
    this.categoriaService.getCategoria()
    .subscribe(response =>{
      //recebe JSON
      this.categorias = response;
      console.log(response);
    })
  }







}
