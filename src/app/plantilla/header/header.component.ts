import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  usuario:string|null=""

  constructor() { }

  ngOnInit(): void {
    this.usuario=localStorage.getItem('usuario')
  }

}
