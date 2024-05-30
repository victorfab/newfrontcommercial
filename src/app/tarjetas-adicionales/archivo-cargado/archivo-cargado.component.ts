import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CuentaGeneralService } from 'src/app/services/cuenta-general.service';

@Component({
  selector: 'app-archivo-cargado',
  templateUrl: './archivo-cargado.component.html',
  styleUrls: ['./archivo-cargado.component.css']
})
export class ArchivoCargadoComponent {

  @Input() showArchivoCargado:boolean = false;
  @Output() modalAddEmpleado = new EventEmitter<any>();
  @Output() cancelarProceso = new EventEmitter<any>();
  @Output() eliminarUsuario = new EventEmitter<any>();
  @Output() confirmarSolicitud = new EventEmitter<any>();
  @Output() addEmpleado = new EventEmitter<any>();
  @Input() cargarArchivoAreas: Array<any> = [];
  @Input() selectUser:{[key:number]:boolean} = {};
  @Output() checkBoton = new EventEmitter<any>();
  @Output() busqueda = new EventEmitter<void>();
  @Output() infoUser = new EventEmitter<void>();
  @Output() infoSubarea= new EventEmitter<any>();
  @Input() model: string =  '';
  @Input() filtros : Array<any> = [];
  @Input() filtrosSub:Array<any>= [];
  @Input() filtrosEmple:Array<any> =  [];
  @Input() alMenosUnUsuario: boolean = false;
  @Input() numeroEmpleados: number =  0;
  @Input() totalEmpleadosSub:number = 0;
  @Output() infoClick = new EventEmitter<string>();
  public page!:number;

  areas:Array<any> = [];
  showSubArea:boolean = false;
  showEmpleados:boolean = false;
  areasClick:boolean = false;
  usuariosPorArea: any = [];
  totalEmpleados: any = {};
  idArea: any = null;
  idSubArea: any = null;
  limiteEmpresa: any;
  
  constructor(
    private _generalCountService: CuentaGeneralService,
  ) {}

  ngOnInit(): void {

    const buc_fake = '51663539';

    this._generalCountService.getGeneralCount(buc_fake).subscribe(data => {
      console.log('Res data estructura', data);
      this.areas = [
        {
          area: data.area,
          empresa:data.empresa,
          lmwl: data.lmwl
        }
      ]

        this.getUserArea();
    },
    (error) =>  {
      console.error('Error al llamar a la API',error);
    });

  }

  getUserArea():void {

    this.usuariosPorArea = [];
    this.usuariosPorArea = this.areas
        .map(row => ({
          area: row.area.map((ar:any)=>({
              idArea: ar.idArea,
              limiteArea: ar.limiteArea,
              limiteAsignado: ar.limiteAsignado,
              nombreArea: ar.nombreArea,
              limiteDisponible: ar.limiteDisponible,
              saldoDisponible: ar.saldoDisponible,
              saldoGastado: ar.saldoGastado,
              empleadosArea: ar.empleados.map((a:any)=>({
                idUsuario:a.id,
                idEmpleado: a.idEmp,
                Limitecredito: a.limEmpleado,
                email: a.email,
                usuario:`${a.nombre} ${a.apellidoP} ${a.apellidoM}`,
                limEmpleado:a.limEmpleado,
                ultimoDig:a.ultimoDig,
                puesto:a.puestoEmpl,
              })),//Comineza el arreglo de subareas
          subareas:ar.subAreas?.map((s:any)=> ({
            idSubarea:s.idArea,
            subarea: s.nombArea,
            limiteSub: s.limite,
            limiteAsignado: s.limiteAsignado,
            limiteDisponible: s.limiteDisponible,
            saldoDisponible: s.saldoDisponible,
            saldoGastado: s.saldoGastado,
            empleadosSub: s.lstEmpleado?.map((e:any) => ({
              idUsuarioSub: e.id,
              idEmpleado: e.idEmp,
              Limitecredito: e.limEmpleado,
              email: e.email,
              usuario: `${e.nombre} ${e.apellidoP} ${e.apellidoM}`,
              limEmpleado:e.limEmpleado,
              ultimoDig:e.ultimoDig,
              puesto:e.puestoEmpl
              }))
            }))
          })),

          empresa:row.empresa

        }));

    this.totalEmpleados = {};
    console.log(this.usuariosPorArea);

    this.usuariosPorArea.forEach((area:any) => {
      console.log(area);
      const nombreArea = area.area;
      this.idArea = area.idArea;
      let empleadosArea = 0;
      

      if(area.empleadosArea) {
        empleadosArea += area.empleadosArea.length;
      }

      if(area.subareas) {
        area.subareas.forEach((subarea:any) => {

          this.idSubArea = subarea.idArea;

          if(subarea.empleadosSub){
            empleadosArea += subarea.empleadosSub.length;
          }

        });
      }
      console.log('empleadosArea', empleadosArea);
      this.totalEmpleados[nombreArea] = empleadosArea;
      
      ////************INFO EMPRESA************* */
      const primeraArea = this.usuariosPorArea[0];
      const infoEmpresa = primeraArea.empresa;
      const lst = primeraArea.empresa.lstDirecciones;

      // Ahora puedes acceder a los campos específicos de la empresa
      const nombreEmpresa = infoEmpresa.nombreEmpresa;
      const razonSocial = infoEmpresa.razonSocial;
      const sucursal = infoEmpresa.sucursal;
      const idDireccion = infoEmpresa.idDireccion;
      this.limiteEmpresa = infoEmpresa.limiteEmpresa;

      console.log('nombreEmpresa', nombreEmpresa);
      console.log('razonSocial', razonSocial);
      console.log('sucursal', sucursal);
      console.log('idDireccion', idDireccion);
      console.log('limiteEmpresa', this.limiteEmpresa);

    });

  }

  infoUserClicked(usuario: any) {
    // Cerrar la información de todas las áreas y subáreas
    this.usuariosPorArea.forEach((row:any) => {
      row.area.forEach((area:any) => {
        area.showSubArea = false;
        area.showEmpleadosArea = false;
        area.iconRotation = false;

        area.subareas.forEach((sub:any) => {
          sub.showEmpleados = false;
          sub.iconRotation = false;
        });
      });
    });

    // Se llama al metodo infoUser con la info del usuario
    this.infoUser.emit(usuario);
  }

  rotation(area:any){
    area.showSubArea = !area.showSubArea;
    area.iconRotation = !area.iconRotation;
    area.showEmpleadosArea = !area.showEmpleadosArea;
  }

  rotationEmpleados(sub:any){
    sub.showEmpleados = !sub.showEmpleados;
    sub.iconRotation = !sub.iconRotation;
  }

  ocultar(areas:any):void {
    areas.showSubArea = !areas.showSubArea;
    areas.subareas.forEach((sub:any)=>{
      sub.showEmpleados = false;
    })
    //identifica si el area esta seleccionada
    areas.areasClick = !areas.areasClick;
  }

}
