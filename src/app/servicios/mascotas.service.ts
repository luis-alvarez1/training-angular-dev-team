import { Injectable } from "@angular/core";


@Injectable()
export class MascotasService {

    private mascotas:Mascotas[] = [
        {
          nombre: "Zeus",
          animal: "perro",
          raza: "caniche",
          edad: "7 años",
          img:"assets/images/origenes-del-caniche-toy-800x600.jpg", 
        },
        {
          nombre: "Pocacosa",
          animal: "pes",
          raza: "guppy",
          edad: "3 meses",
          img:"assets/images/descarga.jpg", 
        },
        {
          nombre: "Flash",
          animal: "tortuga",
          raza: "Tortuga Mediterránea",
          edad: "15 años",
          img:"assets/images/2509512650_18f41c0519_c.jpg", 
        },
        {
          nombre: "Bella",
          animal: "perro",
          raza: "french poodle",
          edad: "10 años",
          img:"assets/images/2807C0F4-5D8E-4263-ACB5-A1C3B38D8D9D.jpg", 
        },
        {
          nombre: "Paco",
          animal: "loro",
          raza: "periquito",
          edad: "1 año",
          img:"assets/images/pqaaablea1urkhy_chdoow9rbwvg2mojbpzqp9_j8hhetbd8gpuonox9ooet_5xfzlonxxjh84p5ktzj3ivjzx6cze8am1t1ukicrxfgq7tfepufbw6r1t0fv0gk.jpg", 
        },
        {
          nombre: "Po",
          animal: "cerdo",
          raza: "miniatura",
          edad: "4 años",
          img:"assets/images/1_S9nfwPgDzhOA14nOspP1Yw.jpeg", 
        },
        {
          nombre: "Drago",
          animal: "perro",
          raza: "Pastor Belga Malinois",
          edad: "3 meses",
          img:"assets/images/img_530_pastor-belga-malinois_0_600.jpg", 
        }
      ];

    constructor() {
        console.log('servicio listo para usar')
    }

    getMascotas():Mascotas[]{
        return this.mascotas;   
    }
}

export interface Mascotas{
  nombre:string;
  animal: string;
  raza: string;
  edad: string;
  img: string;
};