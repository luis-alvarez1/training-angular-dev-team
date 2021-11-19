import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { InfoCuentaService } from './info-cuenta.service';
@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {


  flag = false;
  formulario = new FormGroup ({
    user: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  constructor(private service: InfoCuentaService) { }

  ngOnInit(): void {
  }
  
  onSubmit(){    
    console.log("INGRESO AL SUBMIT!!!");
    if(this.formulario.valid){
      console.log(this.formulario);
      console.log(this.formulario.controls);
      console.log(this.formulario.controls.user);
      console.log(this.formulario.controls.password);

      console.log(this.formulario.controls.user.value);
      console.log(this.formulario.controls.password.value);

      if (this.service.validarUsuario(this.formulario.controls.user.value, this.formulario.controls.password.value)){
        console.log("Usuario es valido!!!");
        this.flag = true;
      }else{
        this.flag = true;
        console.log("Usuario NO es valido!!!");
      }
    }

    console.log("FINALIZA AL SUBMIT!!!");
  }

  

}
