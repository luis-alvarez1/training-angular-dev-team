import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-said',
  templateUrl: './formulario-said.component.html',
  styleUrls: ['./formulario-said.component.css']
})
export class FormularioSaidComponent implements OnInit {


  @Input() etiqueta: string = 'Digite su información de docente';
  ind: boolean = false;

  apellido = new FormGroup({
    labelApellido: new FormControl('Apellidos'),
    lastname: new FormControl('', Validators.required)
  })

  nombre = new FormGroup({
    labelNombre: new FormControl('Nombre'),
    name: new FormControl('', Validators.required)
  })
  
  genero = new FormGroup({
    generos: new FormControl(['Masculino', 'Femenino']),
    labelGenero: new FormControl('Género'),
    gender: new FormControl('', Validators.required)
  })

  edad = new FormGroup({
    labelEdad: new FormControl('Digite su edad'),
    age: new FormControl('', Validators.required)
  })

  area = new FormGroup({
    materias: new FormControl(['Matemáticas','Lengua', 'Ciencias Sociales', 'Ciencias Naturales', 'Educación física', 'Música', 'Inglés', 'Tecnología', 'Formación Ética y Ciudadana']),
    labelMateria: new FormControl('Materia'),
    materia: new FormControl('', Validators.required)
  })

  origen = new FormGroup({
    labelOrigen: new FormControl('Lugar de origen'),
    birthplace: new FormControl('', Validators.required)
  })

  estado = new FormGroup({
    estadoCivil: new FormControl (['Soltero','Casado']),
    labelSocial: new FormControl('Estado Social'),
    civil: new FormControl('', Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }
  mostrarNombre(correo: string) {
    this.nombre.controls.name.setValue(correo)
  }

  mostrarApellido(correo: string) {
    this.apellido.controls.lastname.setValue(correo)
  }

  mostrarGenero(valSelected: string) {
    this.genero.controls.gender.setValue(valSelected)
  }

  mostrarEdad(newNumeroEvent: number) {
    this.edad.controls.age.setValue(newNumeroEvent)
  }

  mostrarMateria(valSelected: string) {
    this.area.controls.materia.setValue(valSelected)
  }

  mostrarOrigen(correo: string) {
    this.origen.controls.birthplace.setValue(correo)
  }

  mostrarEstado(valSelected: string) {
    this.estado.controls.civil.setValue(valSelected)
  }

  showInfo() {
    if (this.nombre.valid && this.apellido.valid && this.edad.valid && this.genero.valid && this.area.valid && this.origen.valid) {
      this.ind = true;
      Swal.fire({
        icon: 'success',
        title: 'Tus datos se han guardado con exito. Ya los puedes ver',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Información incompleta',
        text: 'Complete las indicaciones del formulario'
      })
    }
  }

}
