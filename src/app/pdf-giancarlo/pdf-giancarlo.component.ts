import { Component, Input, OnInit } from '@angular/core';
import {jsPDF} from 'jspdf';
import html2canvas from "html2canvas";
@Component({
  selector: 'app-pdf-giancarlo',
  templateUrl: './pdf-giancarlo.component.html',
  styleUrls: ['./pdf-giancarlo.component.css']
})
export class PdfGiancarloComponent implements OnInit {
  @Input() title: string = 'Recibo de Pago';
  @Input() num: number = 1;
  @Input() dia: number = 23;
  @Input() mes: number = 12;
  @Input() ano: number = 2021;
  @Input() pagoA: string = 'Pagado a: ';
  @Input() nombreRecibe: string = 'Santiago Vasquez Suarez';
  @Input() pagoDe: string = 'Por concepto de: ';
  @Input() nombreDa: string = 'Constructora FABRICAR S.A.S';
  @Input() precioNum: number = 4500000;
  @Input() precioLet: string = 'Cuatro millones quinientos mil pesos';
  @Input() cod: string = '2939239231';
  @Input() firma: string = '';
  @Input() efec: string = 'En efectivo: ';
  @Input() cheque: number = 1;
  @Input() numCuenta: number = 18392839293;
  @Input() ciudad: string = 'Barranquilla';
  @Input() pais: string = 'Colombia';
  @Input() boton: string = 'Descargar PDF';
  constructor() { }

  ngOnInit(): void {
  }
  
  descargaPDF(){
    const data: any = document.getElementById('recibo');
    const pdf = new jsPDF();
    html2canvas(data).then((canvas) =>{
      const img = canvas.toDataURL('image/PNG');

      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (pdf as any).getImageProperties(img);
      const pdfWidth = pdf.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return pdf;
    }) .then((pdfResult)=>{
      pdfResult.save(`${new Date().toISOString}reciboPago.pdf`)
    })
    
  }
}
