import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { InfoCuentaService } from './info-cuenta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {
  flag = false;
  formulario = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private service: InfoCuentaService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.formulario.valid) {
      if (this.service.validarUsuario(this.formulario.controls.user.value, this.formulario.controls.password.value)) {
        this.flag = true;
      } else {
        this.flag = false;
        Swal.fire(
          'ALERTA',
          'informacion incorrecta',
          "info"
        )
      }
    }
  }
}
