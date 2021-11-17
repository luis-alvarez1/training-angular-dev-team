import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public pacientes: Array<any> = []
  public showInfo: Boolean = false;

  formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    edad: new FormControl(undefined, Validators.required),
    direccion: new FormControl('', Validators.required),
    peso: new FormControl(undefined, Validators.required)
  })

  promedioEdad() {
    let sumatoria = 0;
    this.pacientes.forEach(p => {
      sumatoria += p.edad

    })
    return sumatoria / this.pacientes.length;
  }

  promedioPeso() {
    let sumar = 0;
    this.pacientes.forEach(s => {
      sumar += s.peso

    });
    return sumar / this.pacientes.length;
  }

  mayorPeso() {
    let pesoM = 0;

    this.pacientes.forEach(p => {
      if (p.peso > pesoM) {
        pesoM = p.peso
      }
    });
    return pesoM;
  }

  menorPeso() {
    let pesoMenor = Number.MAX_SAFE_INTEGER;
    this.pacientes.forEach(p => {
      if (p.peso < pesoMenor) {
        pesoMenor = p.peso;
      }
    });
    return pesoMenor;
  }

  constructor() { }

  ngOnInit(): void { }

  onSubmit() {

    if (this.formulario.valid) {
      this.pacientes.push(this.formulario.value)
    }
  }
}
