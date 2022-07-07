import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import {take} from 'rxjs/operators';
import { Producto } from 'src/app/interface/producto.interface';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit {

  productos:Producto[]=[]

  constructor(private service:ServiceService, private router:Router, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.mostrarProductos();

    // this.activateRoute.params.pipe( take(1)).subscribe((params) => {
    //   const id = params['id'];
    //   this.productos = this.service.listarProductosxCat(id);
    // });
  }

  mostrarProductos(){
    this.activateRoute.params.subscribe(
      p=>{
        console.log(p)
        let id=p['id']
        console.log(id)
        if(id){
            this.service.listarProductosxCat(id).subscribe((res:any)=>{
              const{productos}=res;
              this.productos=[...this.productos, ...productos];
            })
          }
          })
        }
  

  addCarrito(){
    alert('Producto agregado al carrito')
  }
  }

