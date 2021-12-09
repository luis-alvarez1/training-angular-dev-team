import { Component } from '@angular/core';
import { Personas } from './models/Personas';
import Swal from 'sweetalert2';
import { Paciente } from './admin-pacientes/pacientes.service';

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

  comida: string[] = ['Hamburguesa','Pizza','Tacos','Pastas'];
  selected: any;


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

  onValorSelected(valSelected: string){
    this.selected = valSelected;
  }

  getCreatedPaciente(newPaciente: Paciente){
    console.log(newPaciente);
  }
}