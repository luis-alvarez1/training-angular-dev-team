import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';



export class AppModule { }
@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrls: ['./pantalla.component.css']
})
export class PantallaComponent implements OnInit {
  

  public pacientes:  Array <any> = []

  public showInfo: Boolean = false;

  formulario = new FormGroup({
    nombre: new FormControl(''),
    edad: new FormControl(undefined),
    direccion: new FormControl(''),
    peso: new FormControl(undefined)

  })

  promedioEdad(){
    let sumatoria = 0;
    this.pacientes.forEach(p => {
      sumatoria += p.edad
      
    })


    return sumatoria/this.pacientes.length;
  }

  promedioPeso(){
    let sumar = 0;
    this.pacientes.forEach(s => {
      sumar += s.peso
      
    });

    return sumar/this.pacientes.length;
  }

  mayorPeso(){
     let pesoM = 0;

    this.pacientes.forEach(p => {
      if(p.peso > pesoM){
        pesoM = p.peso
      }
    });

    return pesoM;
  }

  menorPeso(){
  let pesoMenor = Number.MAX_SAFE_INTEGER;
    this.pacientes.forEach(p=> {
      if(p.peso< pesoMenor){
        pesoMenor = p.peso;
      }
    });

    return pesoMenor;
  }

  constructor() {

  }

  ngOnInit(): void {
    
    
  }
  onSubmit() {
    this.pacientes.push(this.formulario.value)
    console.log(this.pacientes)

    if(this.pacientes.length > 1){
      this.showInfo = true;
    }

    
  }
  
}
