import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nuevoNumero: number = 0;

  showNumero(newNumeroEvent: number){
    this.nuevoNumero = newNumeroEvent;
  }

  constructor(){
  }
}