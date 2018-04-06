import { Component, OnInit } from '@angular/core';
import { Cliente } from '../domain/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes : Cliente[]; //armazena os contratos do servidor remoto

  constructor(private clienteService : ClienteService) { 
      this.getClientes();
  }


  ngOnInit() {
  }



  getClientes(){
    this.clienteService.getCliente()
    .subscribe(response =>{
      //recebe JSON
      this.clientes = response;
      console.log(response);
    })
  }






}
