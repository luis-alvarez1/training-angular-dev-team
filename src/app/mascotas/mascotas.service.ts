import { Injectable } from "@angular/core";

export interface Mascota{
  nombre:string;
  animal: string;
  raza: string;
  edad: string;
  id: string;
};

@Injectable()
export class MascotasService {

    private mascotas:Mascota[] = [];

  constructor() {
    
  }

  deleteMascota(id: string){
    this.mascotas=this.mascotas.filter((p)=> p.id !== id)
  }

  editarMascota(pet: Mascota){
    this.mascotas=this.mascotas.filter((p)=> p.id !== pet.id)
    this.mascotas.push(pet)
  }

  addMascotas(pet: Mascota){
    this.mascotas.push(pet)  
  }

  getMascotas(): Mascota[] {
    return this.mascotas
  }
}

