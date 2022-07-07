import { Producto } from './producto.interface';
export interface Pedido {
    id: string,
    productos: ProductoPedidos[],
    precioTotal: number
}

export interface ProductoPedidos{
    producto: Producto,
    cantidad: number
}