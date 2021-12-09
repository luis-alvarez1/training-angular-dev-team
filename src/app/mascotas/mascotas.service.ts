import { Injectable } from "@angular/core";


export interface Mascota{
  nombre:string;
  animal: string;
  raza: string;
  edad: string;
  id: number;
};

@Injectable()
export class MascotasService {

    private mascotas:Mascota[] = [];

  private contMascota = 0;

  constructor() {
    
  }

  deleteMascota(id: number){
    this.mascotas=this.mascotas.filter((p)=> p.id !== id);
  }

  editarMascota(pet: Mascota){
    console.log(pet);
    this.mascotas=this.mascotas.filter((p)=> p.id !== pet.id);
    this.mascotas.push(pet);
  }


  addMascotas(pet: Mascota){
    this.contMascota += 1;
    pet.id = this.contMascota;
    this.mascotas.push(pet)  ;
  }

  getMascotas(): Mascota[] {
    return this.mascotas;
  }
}

