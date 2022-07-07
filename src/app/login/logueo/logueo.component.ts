import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { IUsuario } from '../../interface/usuario.interface';

@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.component.html',
  styleUrls: ['./logueo.component.css']
})
export class LogueoComponent implements OnInit {

  usuario: IUsuario[]=[
    {
      usuario: 'admin',
      clave:'admin'
    }
  ]

  loginForm: FormGroup= this.fb.group({
    usuario:  ['',[Validators.required]],
    clave:  ['',[Validators.required]]
  })

  errorStatus:boolean=false;
  errorMsg:any='';
  
  constructor(private service:ServiceService, private router:Router, private fb:FormBuilder) { }



  ngOnInit(): void {
  }

  onLogin(form:any){
    //let usu = this.usuario.forEach(m=>m.usuario.toString());
    console.log(this.service.Usuarios)
    console.log(form.usuario)
    if(form.usuario=='' || form.clave==''){
      this.errorStatus=true;
      this.errorMsg= 'ERROR. Campos vacios';
      return
    }
    this.service.Usuarios.forEach(i => {      
      if(form.usuario === i.usuario && form.clave === i.clave){
        localStorage.setItem('usuario', form.usuario);
        this.router.navigate(['categoria'])
      }
      else
         this.errorStatus=true;
         this.errorMsg= 'ERROR. Usuario o contraseña incorrectos';
    });
  }

}
