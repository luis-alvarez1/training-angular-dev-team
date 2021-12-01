import { Component } from '@angular/core';
import { Personas } from './models/Personas';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nuevoNumero: number = 0;

  showNumero(newNumeroEvent: number){
    this.nuevoNumero = newNumeroEvent;
  }

  constructor(){
  }
  mostrar(correo: string){
    Swal.fire(
      'Correo Verificado',
      `Su correo (${correo}) es valido`,
      'success'
    )
  }
}