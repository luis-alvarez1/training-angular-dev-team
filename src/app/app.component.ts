import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
texto = "Esto es un video sobre event binding"

cambiarTexto (): void {
  this.texto = "En el proximo video vamos a ver Two way data-binding";
}
}
