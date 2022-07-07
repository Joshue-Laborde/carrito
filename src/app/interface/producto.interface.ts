export interface IProducto {
    estado:    boolean;
    productos: Producto[];
}

export interface Producto {
    id_producto:   number;
    tipo?:          number;
    cod_principal?: number;
    nombre:        string;
    descripcion:   string;
    precio:        string;
    stock:         number;
    imagenes:      string;
}
