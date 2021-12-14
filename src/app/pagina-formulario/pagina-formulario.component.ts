import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagina-formulario',
  templateUrl: './pagina-formulario.component.html',
  styleUrls: ['./pagina-formulario.component.css']
})
export class PaginaFormularioComponent implements OnInit {
  @Input() labelTitle: string = 'Porfavor viajero llene el formulario con su información';
  @Input() labelTitle2: string = 'Su información es';
  flag: boolean = false;

  configNombre = new FormGroup({
    nombre: new FormControl('Nombre', Validators.required),
    valorNombre: new FormControl('', Validators.required)
  })

  configApellido = new FormGroup({
    apellido: new FormControl('Apellidos', Validators.required),
    valorApellido: new FormControl('', Validators.required)
  })

  configEdad = new FormGroup({
    edad: new FormControl('Edad', Validators.required),
    valorEdad: new FormControl(undefined, Validators.required)
  })
  configGenero = new FormGroup({
    genero: new FormControl(['Masculino', 'Femenino'], Validators.required),
    labelGenero: new FormControl('Género', Validators.required),
    valorGenero: new FormControl('', Validators.required)
  })

  configColorFav = new FormGroup({
    colorFav: new FormControl(['Azul', 'Rojo', 'Verde', 'Amarillo', 'Rosado', 'Blanco', 'Negro', 'Gris', 'Otro'], Validators.required),
    labelColor: new FormControl('Color Favorito', Validators.required),
    valorColor: new FormControl('', Validators.required)
  })

  configDestinoFav = new FormGroup({
    destinoFav: new FormControl(['Brasil', 'EEUU', 'Colombia', 'Argentina', 'UAE', 'China', 'Japon', 'India', 'Canada', 'Otro'], Validators.required),
    labelDestinoFav: new FormControl('Destino Favorito', Validators.required),
    valorDestino: new FormControl('', Validators.required)
  })

  configCiudadResidencia = new FormGroup({
    ciudadResidencia: new FormControl(['Medellin', 'Bogota', 'Cali', 'Bucaramanga', 'Barranquilla', 'Cartagena', 'Ibague', 'Manizales', 'Pereira', 'Santa Marta', 'Otra'], Validators.required),
    labelCiudad: new FormControl('Ciudad de Residencia', Validators.required),
    valorCiudad: new FormControl('', Validators.required)
  })

  configSueldo = new FormGroup({
    sueldo: new FormControl('Sueldo', Validators.required),
    valorSueldo: new FormControl(undefined, Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }
  nombre(correo: string) {
    this.configNombre.controls.valorNombre.setValue(correo)
  }
  apellido(correo: string) {
    this.configApellido.controls.valorApellido.setValue(correo);
  }
  edad(newNumeroEvent: number) {
    this.configEdad.controls.valorEdad.setValue(newNumeroEvent);
  }
  genero(valSelected: string) {
    this.configGenero.controls.valorGenero.setValue(valSelected)

  }

  color(valSelected: string) {
    this.configColorFav.controls.valorColor.setValue(valSelected);
  }

  destinoFav(valSelected: string) {
    this.configDestinoFav.controls.valorDestino.setValue(valSelected);
  }

  ciudadResidencia(valSelected: string) {
    this.configCiudadResidencia.controls.valorCiudad.setValue(valSelected);
  }

  sueldo(newNumeroEvent: number) {
    this.configSueldo.controls.valorSueldo.setValue(newNumeroEvent);
  }

  onClick() {
    if (this.configNombre.valid && this.configApellido.valid && this.configEdad.valid && this.configGenero.valid && this.configColorFav.valid && this.configDestinoFav.valid && this.configCiudadResidencia.valid) {
      this.flag = true;
      Swal.fire({
        icon: 'success',
        title: 'Tus datos han sido guardados',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Información incompleta',
        text: 'Porfavor completa la información faltante'
      })
    }
  }
}
