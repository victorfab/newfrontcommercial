import { Direccion } from "./direccion.model";

export class Subarea{

    public nombre: string;
    //public direccion: Direccion;
    
    constructor(nombre: string, 
        //direccion?: Direccion
        ){

        this.nombre = nombre;
        //this.direccion = direccion;
    }
}