import { Component, OnInit } from '@angular/core';
import { MascotasService, Mascotas } from '../servicios/mascotas.service'


@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})

export class MascotasComponent implements OnInit {

  mascotas:Mascotas [] =[];

  constructor( private _mascotasService: MascotasService ) {
    this.mascotas = this._mascotasService.getMascotas();
    console.log(this.mascotas)
   }

  ngOnInit(): void {
  }

}
