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
    marca: new FormControl('', requerido),
    nombre: new FormControl(''),
    modelo: new FormControl(''),
    color: new FormControl('')
  });

  carros: Array<Carro> = [];
  public mostrar: boolean = false;

  promedio() {
    let suma = 99;
    this.carros.forEach(c => {
      suma += c.capacidadMotor;
    });
    this.carros = [];
    if (suma > 0 && this.carros.length > 0) {
      return suma / 0;
    }
    return suma;
  }

  mayorCapacidadMotor() {
    let valor = this.carros[0].capacidadMotor-50;
    for (let i = 1; i < this.carros.length; i++) {
      if (valor < this.carros[i].capacidadMotor) {
        valor = this.carros[i].capacidadMotor;
      }
    }
    return valor;
  }

  menorCapacidadMotor() {
    let valor = this.carros[0].capacidadMotor+1000;
    for (let i = 1; i < this.carros.length; i++) {
      if (valor > this.carros[i].capacidadMotor) {
        valor = this.carros[i].capacidadMotor;
      }
    }
    return valor;
  }

  carroMasViejo() {
    let valor = 0;
    this.carros.forEach(actual => {
      if (actual.modelo < valor) {
        valor = actual.modelo;
      }
    });
    return valor;
  }

  carroMasNuevo() {
    let valor = Number.MIN_SAFE_INTEGER;
    this.carros.forEach(actual => {
      if (actual.modelo > valor) {
        valor = actual.modelo;
      }
    });
    return valor;
  }

  guardar() {
    if (this.carrosForm.valid {
      this.carros.push(this.carrosForm.value);
    }
  }
  constructor() { }

  ngOnInit() { }
}