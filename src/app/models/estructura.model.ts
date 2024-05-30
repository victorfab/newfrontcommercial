import { Area } from "./area.model";
import { Direccion } from "./direccion.model";
import { Empleado } from "./empleado.model";
import { Subarea } from "./subarea.model";

export class Estructura {
    public empresa: {};
    public nombreNombre?: string;
    public nombreEmpresa?: string;
    public razonSocial?: string;
    public sucursal?: string;
    public nuevoIngreso?: string;
    public buc?: string;
    public avisoPrivacidad?: string;
    public lstDirecciones?: Direccion[];
    public area?: Area[];
    public nombre?: string;
    public subareas?: Subarea[];
    public lstEmpleado?: Empleado[];
    public idArea?: string;
    public idEmpresa?: string;
    public limiteEmpresa?: string;
    public lmwl?: string;
    //public direccion: Direccion;
    
    constructor(
        empresa : string,
        nombreNombre: string,
        nombreEmpresa: string,
        razonSocial: string,
        sucursal: string,
        idArea: string,
        nuevoIngreso: string,
        buc: string,
        avisoPrivacidad: string,
        lstDirecciones: Direccion[],
        area: Area[],
        lstEmpleado: Empleado[],
        nombre: string,
        subareas: Subarea[],
        limiteEmpresa: string,
        lmwl: string,
        )

        {
        this.empresa = empresa;
        this.nombreNombre = nombreNombre;
        this.nombreEmpresa = nombreEmpresa;
        this.razonSocial = razonSocial;
        this.sucursal = sucursal;
        this.idArea = idArea;
        this.nuevoIngreso = nuevoIngreso;
        this.buc = buc;
        this.avisoPrivacidad = avisoPrivacidad;
        this.lstDirecciones = lstDirecciones;
        this.area = area;
        this.lstEmpleado = lstEmpleado;
        this.nombre = nombre;
        this.subareas = subareas;
        this.limiteEmpresa = limiteEmpresa;
        this.lmwl =lmwl;
        }
}