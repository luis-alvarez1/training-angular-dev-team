import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numeroPadre = "300";
  nuevoNumeroPadre = "";

  addNumero(newNumeroEvent: string){
    this.nuevoNumeroPadre = newNumeroEvent;
  }

  constructor(){
    
  }
}