import { Component, OnInit } from '@angular/core';
import { EtiquetaService } from './etiqueta.service';
@Component({
  selector: 'app-etiqueta',
  templateUrl: './etiqueta.component.html',
  styleUrls: ['./etiqueta.component.css']
})
export class EtiquetaComponent implements OnInit {

  etiquetas : Array<any> = [];
  constructor(private etiquetaService : EtiquetaService) {}

  ngOnInit(): void {
  }

  mostrar(){
    this.etiquetaService.getAll().subscribe((response)=> {
      this.etiquetas = response.data.etiquetas;
    }) 
  }
}