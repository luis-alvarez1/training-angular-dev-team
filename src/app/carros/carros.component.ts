import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  carrosForm = new FormGroup ({
    marca: new FormControl(''),
    modelo: new FormControl(''),
    capacidadMotor: new FormControl(0),
    color: new FormControl('')
  });

  carros: Array <any> = [];

  guardar(){
    this.carros.push(this.carrosForm.value);
    console.log(this.carrosForm);

  } 

  constructor() { }

  ngOnInit() {
    
  }

}