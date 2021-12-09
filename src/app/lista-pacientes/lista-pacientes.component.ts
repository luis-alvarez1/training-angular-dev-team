import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Paciente, PacientesService } from '../admin-pacientes/pacientes.service';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {
  newPaciente: Paciente = {} as Paciente;
  pacientes: Paciente[] = [];
  showEditar: Boolean = false;

  paciente = new FormGroup({
    nombre: new FormControl(this.newPaciente.nombre, Validators.required),
    edad: new FormControl(this.newPaciente.edad, Validators.required),
    id: new FormControl(this.newPaciente.id, Validators.required),
    peso: new FormControl(this.newPaciente.peso, Validators.required)
  })

  constructor(private servicio: PacientesService) { }

  ngOnInit(): void {
    this.getPacientes();
  }

  getPacientes() {
    this.pacientes = this.servicio.getPacientes();
  }

  eliminarPacientes(id: string) {
    this.servicio.eliminarPaciente(id);
    this.getPacientes();

  }

  getCreatedValue(value: Paciente) {
    this.newPaciente = value;
    this.servicio.addPacientes(this.newPaciente);
    this.getPacientes();
  }

  showEditarPacienteForm(value: Paciente) {
    this.newPaciente = value;
    this.patchPacienteForm()
    this.showEditar = true;
  }

  patchPacienteForm() {
    this.paciente = new FormGroup({
      nombre: new FormControl(this.newPaciente.nombre, Validators.required),
      edad: new FormControl(this.newPaciente.edad, Validators.required),
      id: new FormControl(this.newPaciente.id, Validators.required),
      peso: new FormControl(this.newPaciente.peso, Validators.required)
    })
  }

  editarPaciente() {
    this.servicio.editarPaciente(this.paciente.value);
    this.showEditar = false;
    this.getPacientes();
  }
}