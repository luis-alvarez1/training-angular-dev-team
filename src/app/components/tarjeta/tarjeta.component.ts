import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() titulo:  string =  '';
  @Input() numero:  number = 0;
  @Input() texto: string  = '';
  @Input() color: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }
//Funcion para organizar numero como dinero
formatCurrency(numero: number){
    
  const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',


});

  return formatter.format(numero); 
  }
}
