import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Carro } from '../models/Carro';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  carrosForm = new FormGroup ({
    marca: new FormControl(''),
    nombre: new FormControl(''),
    modelo: new FormControl(''),
    capacidadMotor: new FormControl(''),
    color: new FormControl('')
  });

  carros: Array <Carro> = [];
  public mostrar: boolean = false;

  promedio() {
    let suma = 0;
    this.carros.forEach(c => {
      suma += c.capacidadMotor;
    });
    return suma/this.carros.length;
  }

  mayorCapacidadMotor() {
    let valor = this.carros[0].capacidadMotor;
    for(let i = 1; i < this.carros.length; i++){
      if(valor < this.carros[i].capacidadMotor){
        valor = this.carros[i].capacidadMotor;
      }
    }
    return valor;
  }

  menorCapacidadMotor() {
    let valor = this.carros[0].capacidadMotor;
    for(let i = 1; i < this.carros.length; i++){
      if(valor > this.carros[i].capacidadMotor){
        valor = this.carros[i].capacidadMotor;
      }
    }
    return valor;
  }

  carroMasViejo() {
    let valor = Number.MAX_SAFE_INTEGER;
    this.carros.forEach(actual => {
      if(actual.modelo < valor){ 
        valor = actual.modelo;
      }
    });
    return valor;
  }

  carroMasNuevo() {
    let valor = Number.MIN_SAFE_INTEGER;
    this.carros.forEach(actual => {
      if(actual.modelo > valor){ 
        valor = actual.modelo;
      }
    });
    return valor;
  }   

  guardar(){
    this.carros.push(this.carrosForm.value);
    console.log(this.carros);

    if(this.carros.length > 1){
      this.mostrar = true; 
    }
  }

  constructor(public dialog: MatDialog) {}
  ngOnInit() { }
}