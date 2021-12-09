import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Paciente, PacientesService } from './pacientes.service';

@Component({
  selector: 'app-admin-pacientes',
  templateUrl: './admin-pacientes.component.html',
  styleUrls: ['./admin-pacientes.component.css']
})
export class AdminPacientesComponent implements OnInit {
  @Output() formularioEmmiter = new EventEmitter<Paciente>();

  constructor(private servicio: PacientesService) { }

  paciente = new FormGroup({
    nombre: new FormControl('', Validators.required),
    edad: new FormControl(undefined, Validators.required),
    id: new FormControl('', Validators.required),
    peso: new FormControl(undefined, Validators.required)
  })

  ngOnInit(): void { }

  onSubmit() { }

  onClick() {
    this.formularioEmmiter.emit(this.paciente.value);
  }
}
