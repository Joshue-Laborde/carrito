export interface ICategoria {
    estado: boolean;
    lista:  Lista[];
}

export interface Lista {
    id_categoria: number;
    nombre:       string;
    descripcion:  string;
    icono:        string;
    background?:   string;
}
