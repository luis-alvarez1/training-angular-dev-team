import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MascotasService, Mascota } from './mascotas.service'


@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})

export class MascotasComponent implements OnInit {

  ind = false;

  nuevaMascota: Mascota = {}as Mascota; 
  
   mascotasGroup : FormGroup;
    
  mascotas: Mascota [] =[];

  constructor( private _mascotasService: MascotasService ) {
    this.mascotasGroup = new FormGroup({
      nombre: new FormControl('', [Validators.required,]),
      animal: new FormControl('', [Validators.required,]),
      raza: new FormControl('', [Validators.required,]),
      edad: new FormControl('', [Validators.required,]),
      id: new FormControl('', [Validators.required,]),
    })
    this.mascotas = this._mascotasService.getMascotas()
    
    }

    editarForm = new FormGroup({
      nombre: new FormControl('', [Validators.required,]),
      animal: new FormControl('', [Validators.required,]),
      raza: new FormControl('', [Validators.required,]),
      edad: new FormControl('', [Validators.required,]),
      id: new FormControl('', [Validators.required,]),
    })

  ngOnInit(): void {
    this.mascotas = this._mascotasService.getMascotas();
  }

  eliminar(id: string){
    this._mascotasService.deleteMascota(id)
    this.mascotas = this._mascotasService.getMascotas();
  }

  showMascota(){
    this._mascotasService.addMascotas(this.mascotasGroup.value);
  }
  
  llenarForm(){
    this.editarForm = new FormGroup({
      nombre: new FormControl(this.nuevaMascota.nombre, [Validators.required,]),
      animal: new FormControl(this.nuevaMascota.animal, [Validators.required,]),
      raza: new FormControl(this.nuevaMascota.raza, [Validators.required,]),
      edad: new FormControl(this.nuevaMascota.edad, [Validators.required,]),
      id: new FormControl(this.nuevaMascota.id, [Validators.required,]),
    })
  }

  editarMascotaForm(value: Mascota){
    this.nuevaMascota = value;
    this.llenarForm();
    this.ind=true;
  }

  editar(){
    this._mascotasService.editarMascota(this.editarForm.value);
    this.getPet();
    this.ind=false;
  }

  getPet(){
    this.mascotas = this._mascotasService.getMascotas();
  }

}
