import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() label: string =  "";
  @Input() comida: string[] = [];
  @Output() valSelected = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  runOnChange(valSelected: any){
    this.valSelected.emit(valSelected);
  }
}
