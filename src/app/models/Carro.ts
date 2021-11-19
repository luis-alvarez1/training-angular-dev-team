export class Carro{
    marca: string;
    nombre: string;
    modelo: number;
    capacidadMotor: number;
    color: string;

    constructor( marca: string, nombre: string, modelo: number, capacidadMotor: number, color: string){
        this.marca = marca;
        this.nombre = nombre;
        this.modelo = modelo;
        this.capacidadMotor = capacidadMotor;
        this.color = color;
    }
}