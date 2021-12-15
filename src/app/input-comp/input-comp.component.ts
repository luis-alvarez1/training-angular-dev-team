import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-input-comp',
  templateUrl: './input-comp.component.html',
  styleUrls: ['./input-comp.component.css'],
})
export class InputCompComponent implements OnInit {
  @Input() etiquita: string = '';
  @Input() imagen: string = '';
  @Input() holder: string = '';
  @Input() min: number = 0;
  @Input() max: number = 100;

  @Output() correo: EventEmitter<string>= new EventEmitter<string>();

  public form = new FormGroup({
    emailFormControl : new FormControl('',[
      Validators.required,
      Validators.maxLength(this.max),
      Validators.minLength(this.min),
    ])
  });
  

  constructor() {
  }

  ngOnInit(): void {}

  mostrar() {
    this.correo.emit(this.form.controls.emailFormControl.value)
  }
}
