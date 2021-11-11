import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrls: ['./pantalla.component.css']
})
export class PantallaComponent implements OnInit {
  @Input() nombre: string = ''; 
  @Input() edad: number = 0;
  @Input() direccion: string = '';
  @Input() peso: number = 0;

  

  constructor() { }

  ngOnInit(): void {
    var paciente = [this.nombre, this.edad, this.direccion, this.peso ];
  }

}
