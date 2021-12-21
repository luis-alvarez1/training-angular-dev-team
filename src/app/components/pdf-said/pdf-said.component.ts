import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-pdf-said',
  templateUrl: './pdf-said.component.html',
  styleUrls: ['./pdf-said.component.css']
})
export class PdfSaidComponent implements OnInit {

  constructor() {
    this.downloadPDF();
  }
  public downloadPDF(): void {
    const doc = new jsPDF();

    doc.text('Hello world!', 10, 10);
    doc.save('hello-world.pdf');
  }

  ngOnInit(): void {
  }

}
