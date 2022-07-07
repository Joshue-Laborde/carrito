import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lista } from '../../interface/categoria.interface';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias: Lista[]=[]

  constructor(private service:ServiceService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.mostrarCategorias();
  }

  private mostrarCategorias():void{
    this.service.listarCategorias().subscribe((res:any)=>{
      const{lista}=res;
      this.categorias=[...this.categorias, ...lista]
    })
  }

}
