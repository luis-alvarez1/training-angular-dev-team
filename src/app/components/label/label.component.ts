import { Component, OnInit } from '@angular/core';
import { LabelService } from 'src/app/components/label/label.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  eti: Array<any> = [];
  selected: any;
  tiposPagosArray: Array<any> = [];
  
  constructor(private labelService: LabelService) { }

  ngOnInit(): void {

    this.labelService.get().subscribe((etiqueta) => {
      this.eti = etiqueta.data.etiquetas;
      
    })

    this.labelService.getMediosPago().subscribe((etiquet) => {
      this.tiposPagosArray = etiquet.data.tipospagos
      
    })

  }

  onValorSelected(valSelected: string){
    this.selected = valSelected;
  }

}
