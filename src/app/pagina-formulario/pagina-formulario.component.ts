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
    flag: boolean = true;
    
    configGenero = new FormGroup({
      genero:new FormControl (['Masculino', 'Femenino'],Validators.required),
      labelGenero: new FormControl( 'Género',Validators.required),
      valorGenero:new FormControl( '',Validators.required)
    })

    configColorFav = new FormGroup({
      colorFav: new FormControl( ['Azul', 'Rojo', 'Verde', 'Amarillo', 'Rosado', 'Blanco', 'Negro', 'Gris', 'Otro'], Validators.required),
      labelColor: new FormControl( 'Color Favorito', Validators.required),
      valorColor: new FormControl('', Validators.required)
    })
     
    configDestinoFav = new FormGroup({
      destinoFav: new FormControl(['Brasil', 'EEUU', 'Colombia', 'Argentina', 'UAE', 'China', 'Japon', 'India', 'Canada', 'Otro'], Validators.required),
      labelDestinoFav: new FormControl('Destino Favorito', Validators.required),
      valorDestino: new FormControl('', Validators.required)
    })

    configCiudadResidencia = new FormGroup({
      ciudadResidencia: new FormControl(['Medellin', 'Bogota', 'Cali', 'Bucaramanga', 'Barranquilla', 'Cartagena', 'Ibague', 'Manizales', 'Pereira', 'Santa Marta'], Validators.required),
      labelCiudad: new FormControl( 'Ciudad de Residencia', Validators.required),
      valorCiudad: new FormControl('', Validators.required)
    })
  
  constructor() { }

  ngOnInit(): void {
  }

  genero(valSelected: string){
    this.configGenero.controls.valorGenero.setValue(valSelected) 
    
  }

  color(valSelected:string){
    this.configColorFav.controls.valorColor.setValue(valSelected);
  }

  destinoFav(valSelected:  string){
    this.configDestinoFav.controls.valorDestino.setValue(valSelected);
  }

  ciudadResidencia(valSelected: string){
    this.configCiudadResidencia.controls.valorCiudad.setValue(valSelected);
  }

  onClick(){
    if(this.configGenero.valid && this.configColorFav.valid && this.configDestinoFav.valid && this.configCiudadResidencia.valid){
      this.flag = true;
      Swal.fire({
        icon: 'success',
        title: 'Tus datos han sido guardados',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Información incompleta',
        text: 'Porfavor completa la información faltante'
      })
    }
  }
}
