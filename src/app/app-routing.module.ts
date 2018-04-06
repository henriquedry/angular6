import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { ClienteComponent } from './cliente/cliente.component';



const routes: Routes = [

{ path: '', redirectTo: '/pagina1', pathMatch: 'full' },

{ path: 'categoria', component: CategoriaComponent },

{ path: 'cliente', component: ClienteComponent }

];

@NgModule({

imports: [ RouterModule.forRoot(routes) ],

exports: [ RouterModule ]

})

export class AppRoutingModule {}