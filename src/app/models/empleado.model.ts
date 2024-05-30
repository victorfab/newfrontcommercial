


import { Direccion } from "./direccion.model";
import { Subarea } from "./subarea.model";
/*Class use to define areas made of subareas */
export class Empleado {
    public id: string;
    public idArea: string;
    public idPadre: string;
    public nombre: string;
    public apellidoP: string;
    public apellidoM: string;
    public email: string;
    public nombreEst: string;
    public ultimoDig: string;
    public puestoEmpl: string;
    public rfc: string;
    public idEmp: string;
    public hashTar: string;
    public subareas: Subarea[];
    public idDireccion: string;
    public idEmpresa?: string;
    public limPorSubarea?: string;
    public empresa?: string;
    public limEmpleado?: string;
    public fechaSolic?: string;
    public buc?: string;
    public listEmpleadoError?: any[] = [];
    public listEmpleadoSinArea?: any[] = [];
    //public direccion: Direccion;
    
    constructor(
        id: string,
        nombre : string,
        apellidoP: string,
        apellidoM: string,
        email: string,
        nombreEst : string,
        ultimoDig: string,
        puestoEmpl: string,
        rfc: string,
        idEmp : string,
        hashTar: string,
        subareas: Subarea[],
        idArea: string,
        idPadre: string,
        idDireccion: string,
        empresa: string,
        limEmpleado: string,
        fechaSolic: string,
        buc: string,
        listEmpleadoError: [],
        listEmpleadoSinArea: [],
        )
        //direccion?: Direccion)
        {
            
        this.id = id;
        this.nombre = nombre;
        this.apellidoP = apellidoP;
        this.apellidoM = apellidoM;
        this.email = email;
        this.nombreEst = nombreEst;
        this.ultimoDig = ultimoDig;
        this.puestoEmpl = puestoEmpl;
        this.rfc = rfc;
        this.idEmp = idEmp;
        this.hashTar = hashTar;
        this.subareas = subareas;
        this.idArea = idArea;
        this.idPadre = idPadre;
        this.idDireccion = idDireccion;
        this.empresa = empresa;
        this.limEmpleado = limEmpleado;
        this.fechaSolic= fechaSolic;
        this.buc = buc;
        this.listEmpleadoError = listEmpleadoError;
        this.listEmpleadoSinArea = listEmpleadoSinArea;
       // this.direccion =  direccion
    }
}