import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 listEstudiantes: any[] = [
  {nombre: "Giancarlo Cabrera", estado: "Promocionado"},
  {nombre: "Juan Lopez", estado: "Negado"},
  {nombre: "Francisco Giraldo", estado: "Negado"},
  {nombre: "Pancho Rodriguez", estado: "Promocionado"}

]
 
mostrar = true;

toogle(): void {
  this.mostrar = !this.mostrar;
}
 

}
