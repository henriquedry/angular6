import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaService } from './service/categoria.service';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteService } from './service/cliente.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    ClienteComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CategoriaService , ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
