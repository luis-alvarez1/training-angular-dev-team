import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Carro } from '../models/Carro';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  carrosForm = new FormGroup({
    marca: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    modelo: new FormControl(undefined, Validators.required),
    capacidadMotor: new FormControl(undefined, Validators.required),
    color: new FormControl('', Validators.required)
  });

  public carros: Array<Carro> = [];
  public mostrar: boolean = false;

  promedio() {
    let suma = 0;
    this.carros.forEach(c => {
      suma += c.capacidadMotor;
    });

    return suma / this.carros.length;
  }

  mayorCapacidadMotor() {
    let valor = 0;
    for (let i = 0; i < this.carros.length; i++) {
      if (valor < this.carros[i].capacidadMotor) {
        valor = this.carros[i].capacidadMotor;
      }
    }
    return valor;
  }


  menorCapacidadMotor() {
    let valor = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < this.carros.length; i++) {
      if (valor > this.carros[i].capacidadMotor) {
        valor = this.carros[i].capacidadMotor;
      }
    }
    return valor;
  }

  carroMasNuevo() {
    let valor = 0;
    this.carros.forEach(actual => {
      if (actual.modelo > valor) {
        valor = actual.modelo;
      }
    });
    return valor;
  }


  carroMasViejo() {
    let valor = Number.MAX_SAFE_INTEGER;
    this.carros.forEach(actual => {
      if (actual.modelo < valor) {
        valor = actual.modelo;
      }
    });
    return valor;
  }

  guardar() {
    if (this.carrosForm.valid) {
      this.carros.push(this.carrosForm.value);
    }
  }
  constructor() { }

  ngOnInit() { }
}