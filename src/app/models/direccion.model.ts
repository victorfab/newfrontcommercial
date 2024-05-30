export class Direccion{
    public id!: string;
    public calle: string;
    public numExterior: string;
    public numInterior: string;
    public colonia: string;
    public codigoPostal: string;
    public estado: string;
    public pais: string;
    public idEmpresa!: string;
    public alias: string;
    public municipio: string;
    public principal!: string;
    //Colonia
    public nombre!: string;

    constructor(
        id: string,
        calle: string,
        numExterior: string,
        numInterior: string,
        colonia: string,
        codigoPostal: string,
        estado: string,
        pais: string,
        idEmpresa: string,
        alias: string,
        municipio: string,
        principal: string,        
    ){
        this.id = id;
        this.calle = calle;
        this.numExterior = numExterior;
        this.numInterior = numInterior;
        this.colonia = colonia;
        this.codigoPostal = codigoPostal;
        this.estado = estado;
        this.pais = pais;
        this.idEmpresa = idEmpresa;
        this.alias = alias;
        this.municipio = municipio;
        this.principal = principal;
    }
}