import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

export interface Paciente {
  nombre: string;
  edad: number;
  id: string;
  peso: number;
}
@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private pacientes: Paciente[];

  constructor() { this.pacientes = []; }

  eliminarPaciente(id: string) {
    this.pacientes = this.pacientes.filter((s) => s.id !== id)
  }

  editarPaciente(paciente: Paciente) {
    this.pacientes = this.pacientes.filter((s) => s.id !== paciente.id)
    this.pacientes.push(paciente)
  }

  addPacientes(pacient: Paciente) {
    const pacientExists = this.pacientes.filter((p) => p.id === pacient.id).length > 0;
    if (!pacientExists) {
      this.pacientes.push(pacient);
    } else {
      Swal.fire("El paciente ya existe", "No puede haber mas de un paciente con el mismo identificador", "error")
    }
  }

  getPacientes(): Paciente[] {
    return this.pacientes;
  }
}
