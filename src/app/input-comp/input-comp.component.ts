import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-comp',
  templateUrl: './input-comp.component.html',
  styleUrls: ['./input-comp.component.css']
})
export class InputCompComponent implements OnInit {

  @Input() etiquita: string = '';
  @Input() imagen: string = '';

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  

  constructor() { }

  ngOnInit(): void {
  }

  mostrar(event: Event){
    event.preventDefault();
    console.log(this.emailFormControl.value)
  }

}
