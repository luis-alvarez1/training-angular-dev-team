import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 texto = 'Esto es un video sobre Event binding'

 cambiarTexto(): void{
   this.texto = 'En el proximo vídeo vamos a ver Two way data-binding';
 }
}
