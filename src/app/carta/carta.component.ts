import { Component, Input, OnInit } from '@angular/core';
import { Personas } from '../models/Personas';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})

export class CartaComponent implements OnInit {
  @Input() listPersonas: Personas[] = [];
  @Input() color: string = "";
  @Input() titulo: string = "";
  @Input() listDatos: string[] = ["nombre"];
  
  ngOnInit(): void {
    
  }

}
