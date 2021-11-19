import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { InfoCuentaService } from '../info-cuenta.service';
@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  formulario = new FormGroup ({
    user: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  constructor(private service: InfoCuentaService) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    if(this.formulario.valid){
      
    }
  }

  

}
