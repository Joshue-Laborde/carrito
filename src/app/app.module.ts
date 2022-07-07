import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogueoComponent } from './login/logueo/logueo.component';
import { CategoriaComponent } from './home/categoria/categoria.component';
import { HeaderComponent } from './plantilla/header/header.component';
import { ListadoProductoComponent } from './producto/listado-producto/listado-producto.component';
import { CarritoComprasComponent } from './carrito/carrito-compras/carrito-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    LogueoComponent,
    CategoriaComponent,
    HeaderComponent,
    ListadoProductoComponent,
    CarritoComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
