import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUsuario } from '../interface/usuario.interface';
import { ICategoria } from '../interface/categoria.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducto, Producto } from '../interface/producto.interface';
import { Pedido, ProductoPedidos } from '../interface/pedido.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private _usuario: IUsuario[]=[
    {
      usuario: 'admin',
      clave:'admin'
    }
  ]

  private pedido!:Pedido
  id:string=''

  private baseUrl:string=environment.baseUrl;

  // -------------- USUARIOS -------------------------
  get Usuarios():IUsuario[]{
    return [...this._usuario];
  }

  constructor(private http:HttpClient) { }

  // ------ CATEGORIAS --------
  listarCategorias():Observable<ICategoria[]>{
    return this.http.get<ICategoria[]>(`${this.baseUrl}`)
  }


  //------ PRODUCTOS POR CATEGORIA------

  listarProductosxCat(id:number):Observable<Producto[]>{
    let direccion =`https://gestion.promo.ec/promo/productos/ws/categoria-listar-productos/?VHozaS85TU9uUnhTR2FpMWh0eUJCZz09=gAAAAABgAGpunQZzKslbNqIL71S6nhjanaqWYmni6w7Bv_i0nc49t4WyDc3X6fPWVYzx2Lg_3b8PabFJ5RUF2rS43OGWXQ-Yuw==&id_sucursal=20&id_categoria=${id}&id_subcategoria=0&offset=0&limit=10`;
    return this.http.get<Producto[]>(direccion)
  }


  //Carrito

  initCarrito(){
    this.pedido={
      id: this.id,
      productos: [],
      precioTotal: 0
    }
  }

  carrito(producto: Producto){
      const item=this.pedido.productos.find(prod=>{
        return (prod.producto.id_producto===producto.id_producto)
      })
      if(item !== undefined){
        item.cantidad ++;
      }else{
        const add:ProductoPedidos = {
          cantidad: 1,
          producto: producto
        }
        this.pedido.productos.push()
      }
  }
}
