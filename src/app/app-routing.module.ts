import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogueoComponent } from './login/logueo/logueo.component';
import { CategoriaComponent } from './home/categoria/categoria.component';
import { ListadoProductoComponent } from './producto/listado-producto/listado-producto.component';
import { CarritoComprasComponent } from './carrito/carrito-compras/carrito-compras.component';

const routes: Routes = [
  {
    path:'login',
    component:LogueoComponent
  },
  {
    path: '',
    component: LogueoComponent,
    pathMatch: 'full'
  },
  {
    path:'categoria',
    component:CategoriaComponent
  },
  {
    path:'productos/:id',
    component:ListadoProductoComponent
  },
  {
    path:'carrito',
    component:CarritoComprasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
