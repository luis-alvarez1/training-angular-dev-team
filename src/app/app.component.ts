import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Giancarlo";

  constructor() {
    setInterval(() => this.nombre = 'Pedro', 3000)
  }

  //Crear funcion para sumar valor
  getSuma(numero1: number, numero2: number) {
    return numero1 + numero2;
  }
}
