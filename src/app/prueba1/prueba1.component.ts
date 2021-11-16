import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html',
  styleUrls: ['./prueba1.component.css']
})
export class Prueba1Component implements OnInit {

  numeroCuadrado: number = 0;

  @Input() titulo: string = '';

  @Input() imagen: string = '';

  @Output() numeroEvent=new EventEmitter<number>();

  numeroForm = new FormGroup({
    numero : new FormControl(0)
  });

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  
  elevarNumero (){
    
  this.numeroCuadrado = this.numeroForm.controls.numero.value*this.numeroForm.controls.numero.value
  }
  
  onCuadrado(numero:number){
    this.numeroCuadrado=numero;

  }

}
