import { Direccion } from "./direccion.model";
import { Subarea } from "./subarea.model";
/*Class use to define areas made of subareas */
export class Area{
    public nombre: string;
    public subareas: Subarea[];
    public idArea?: string;
    public idEmpresa?: string;
    //public direccion: Direccion;
    
    constructor(
        nombre : string,
        subareas: Subarea[])
        //direccion?: Direccion)
        {
            
        this.nombre = nombre;
        this.subareas = subareas;
       // this.direccion =  direccion
    }
}