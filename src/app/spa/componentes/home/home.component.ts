import { Component, OnInit } from '@angular/core';
import { Personas } from 'src/app/models/Personas';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
  mostrar(correo: string){
    Swal.fire(
      'Correo Verificado',
      `Su correo (${correo}) es valido`,
      'success'
    )
  }

  ngOnInit(): void {
  }

}
