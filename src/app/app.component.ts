import { Component } from '@angular/core';
import { Personas } from './models/Personas';


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

  constructor(){
    this.listadoPersonas =  [
      {nombre : "Katherin", apellido: "Perez", sexo : "Femenino", edad : 18},
      {nombre : "Said", apellido: "Salcedo", sexo : "Masculino", edad : 19},
      {nombre : "Juan Daniel", apellido: "Guerrero", sexo : "Masculino", edad : 17}
    ];
  }
}

  resultado(data:any) { }
}