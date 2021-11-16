export class Carro{
    marca: string;
    modelo: string;
    capacidadMotor: number;
    color: string;

    constructor(marca: string, modelo: string, capacidadMotor: number, color: string){
        this.marca = marca;
        this.modelo = modelo;
        this.capacidadMotor = capacidadMotor;
        this.color = color;
    }
}