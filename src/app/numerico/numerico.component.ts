import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-numerico',
  templateUrl: './numerico.component.html',
  styleUrls: ['./numerico.component.css']
})
export class NumericoComponent implements OnInit {

  @Input() numero = "200";
  @Output() newNumeroEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewNumero(value: string) {
    this.newNumeroEvent.emit(value);
  }

}
