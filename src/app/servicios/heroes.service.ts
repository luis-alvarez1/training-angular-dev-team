import { Injectable } from "@angular/core";


@Injectable()
export class HeroesService {

    private heroes:Heroe[]= 
        [
            {
              nombre: "Aquaman",
              bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
              img: "assets/images/aquaman.png",
              aparicion: "1941-11-01",
              casa:"DC"
            },
            {
              nombre: "Batman",
              bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
              img: "assets/images/batman.png",
              aparicion: "1939-05-01",
              casa:"DC"
            },
            {
              nombre: "Hulk",
              bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
              img: "assets/images/hulk.png",
              aparicion: "1962-05-01",
              casa:"Marvel"
            },
            
          ];

    constructor() {
        console.log('servicio listo para usar')
    }

    getHeroes():Heroe[]{
        return this.heroes
    }
}

export interface Heroe{
    nombre: string
    bio: string
    img: string
    aparicion: string
    casa: string
};