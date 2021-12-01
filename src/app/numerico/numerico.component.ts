import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-numerico',
  templateUrl: './numerico.component.html',
  styleUrls: ['./numerico.component.css']
})
export class NumericoComponent implements OnInit {
  @Output() newNumeroEvent: EventEmitter<number> = new EventEmitter<number>();
  
  @Input() min: number = 0;
  @Input() max: number = 100;

  public formGroup: FormGroup = new FormGroup({
    numero: new FormControl('',[
      Validators.required,
      Validators.min(this.min),
      Validators.max(this.max)
    ]),
  });

  constructor() {
  }

  ngOnInit() {
  }

  showNewNumero() {
    this.newNumeroEvent.emit(this.formGroup.controls.numero.value);
  }  
}
