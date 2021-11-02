import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  resultado(data:any) {
    console.log(data);
  }
  
  title = 'EjmploComponente';

  

  
}