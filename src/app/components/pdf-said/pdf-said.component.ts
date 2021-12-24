import { Component, Input, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-pdf-said',
  templateUrl: './pdf-said.component.html',
  styleUrls: ['./pdf-said.component.css']
})
export class PdfSaidComponent implements OnInit {

  @Input() titulo: string = 'RECIBO DE ARRENDAMIENTO';
  @Input() firma: string = 'Nombre y firma de quien recibe'

  formulario = new FormGroup({
    numero: new FormControl('', Validators.required),
    lugar: new FormControl(undefined, Validators.required),
    día: new FormControl('', Validators.required),
    mes: new FormControl(undefined, Validators.required),
    año: new FormControl(undefined, Validators.required),
    propietario: new FormControl(undefined, Validators.required),
    cantidad: new FormControl(undefined, Validators.required),
    cantidadLetras: new FormControl(undefined, Validators.required)
  })

  constructor() {
    this.downloadPDF();
  }
  
  ngOnInit(): void {
  }
  
  public downloadPDF() {

    const DATA: any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
    });
  }
}

