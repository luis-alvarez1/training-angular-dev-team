import { Injectable } from "@angular/core";

@Injectable()

export class TarjetasService{

    //Crear una variable donde este almacenado la informacion que el service le va a ofrecer al componente
    private tarjetas: any[] = [
        {
            titulo: "Tarjeta de cumpleanos",
            numero: 5683733,
            texto: "Felicitaciones en tu dia de cumpleanos",
            color: "blue"
        },
        {
            titulo: "Tarjeta de regalo",
            numero: 728637263,
            texto: "Que disfrutes el regalo",
            color: "yellow"
        },
        {
            titulo: "Cheque",
            numero: 938474833,
            texto: "Disfrute su cheque",
            color: "white"
        },
        {
            titulo: "Tarjeta de despedida",
            numero: 5683733,
            texto: "Espero que te vaya bien. No es un adios, es un hasta luego...",
            color: "black"
        },
        {
            titulo: "Tarjeta de regalo Netflix",
            numero: 2873928738232,
            texto: "Disfruta de 3 meses los cuales ya han sido pagos",
            color: "green"
        }

    ];

    constructor(){
        console.log('Hola mundo');
    }

    //Creacion de metodo para obtener todas las tarjetas creadas anteriormente
    getTarjetas(){
        return this.tarjetas; //Se retorna la variable creada que almacena las tarjetas: tarjetas
    }

}
