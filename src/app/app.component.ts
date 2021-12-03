import { Component, Input, Output } from '@angular/core';
import { Personas } from './models/Personas';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tituloDesdePadre = 'LISTADO CUMPLEAÑOS...';
  colorDesdePadre = "red";
  listadoPersonas: Personas[]; 
  listadoDatos: string[] = ["Nombre", "Apellido", "Sexo", "Edad"];

  comida: string[] = [];

  constructor(){
    this.listadoPersonas =  [
      {nombre : "Katherin", apellido: "Perez", sexo : "Femenino", edad : 18},
      {nombre : "Said", apellido: "Salcedo", sexo : "Masculino", edad : 19},
      {nombre : "Juan Daniel", apellido: "Guerrero", sexo : "Masculino", edad : 17}
    ];
  }

  mostrar(correo: string){
    Swal.fire(
      'Correo Verificado',
      `Su correo (${correo}) es valido`,
      'success'
    )
  }
}