import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';

import { from } from 'rxjs';


//Importar servicio
import { TarjetasService } from 'src/app/servicios/tarjetas.service';

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
  
  //Creacion de un array vacio
  tarjetas: any[] = [];
  
  //Siempre se crea una propiedad del servicio dentro del constructor 
  //De esta manera se esta importando a aca el servicio creado
  constructor(private _tarjetasService: TarjetasService) {
     
   }

  ngOnInit() {
    //Se traen todas las tarjetas y se almacenan en el array tarjetas, creado en la linea 22
    this.tarjetas = this._tarjetasService.getTarjetas();
    console.log(this.tarjetas);
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
