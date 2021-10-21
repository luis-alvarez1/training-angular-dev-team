import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listEstudiante: any[] = [
    {nombre: 'Said Salcedo', estado: 'Promocionado'},
    {nombre: 'Katherin Perez', estado: 'Regular'},
    {nombre: 'Giancarlo Cabrera', estado: 'Regular'}
  ]
}
