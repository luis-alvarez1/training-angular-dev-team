import { Component, OnInit } from '@angular/core';
import { LabelService } from 'src/app/components/label/label.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  eti: Array<any>=[]  
  
  constructor(private labelService : LabelService) { }

  ngOnInit(): void {
    
    this.labelService.get().subscribe((etiqueta)=>{
      this.eti = etiqueta.data.etiquetas
      console.log(this.eti)})
  }
}
