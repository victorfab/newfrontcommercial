import { Component, Input, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { ArchivoCargadoService } from '../services/archivo-cargado.service';
import { TarjetasAsignadasService } from '../services/tarjetas-asignadas.service';
import { NomStatusService } from '../services/nom-status.service';
import { StatusEnvioRealizadoService } from '../services/status-envio-realizado.service';
import { StatusEntregadasService } from '../services/status-entregadas.service';
import { DatosUsuarioService } from '../services/datos-usuario.service';
import { CuentaGeneralService } from 'src/app/services/cuenta-general.service';

@Component({
  selector: 'app-contenido-tarjetas',
  templateUrl: './contenido-tarjetas.component.html',
  styleUrls: ['./contenido-tarjetas.component.css']
})
export class ContenidoTarjetasComponent {
  @Output() empleadoAgregado = new EventEmitter<any>();
  @Output() infoEmpleadoAgregado = new EventEmitter<any>();

  usuariosPorArea: any=[];
  areas:Array<any> = [];
  empleadosaeracount!: [];
  tarjetasAdicionales:boolean = true;
  registroUsuarios:boolean = true;
  modalLoading:boolean = false;
  modalEmpleado:boolean = false;
  showArchivo:boolean=false;
  modalCancelarProceso:boolean = false;
  modalEliminarUsuario:boolean = false;
  modalUsuarioEliminado:boolean = false;
  modalConfirmarSolicitud:boolean = false;
  modalSuperToken:boolean = false;
  modalComprobante:boolean = false;
  tarjetasAsignadas:boolean = false;


  tarjetasSolicitadas:Array<any> =[];
  pendientes:Array<any> = [];
  enviosRealizados: Array<any> = [];
  entregadas:Array<any> = [];
  nombreStatus: Array<any> = [];
  getTarjetas:Array<any> =[];
  getEnvios:Array<any> = [];
  getEntregadas:Array<any> = [];
  info_archivo:Array<any> =[];
  getArea:Array<any> = [];
  nuevoUsuario:any ={
    nombre: '',
    apellido: '',
    homoclave: '',
    correo: '',
    limiteCredito: null,
  };
  valorSeleccionado:any ={};
  //Seleccionar usuario
  //usuarioSeleccionado:boolean []=[];//Selecciona solo un input
  //alMenosUnUsuarioSelect:boolean = false;

  usuariosSeleccionados: {[key:number]:boolean} = {};//Objeto(las claves son los ID´s y los valores son estados de seleccion)
  infoselect:{idEmpleado:number,seleccionado:boolean}[]=[];
  botonHabilitado:boolean = false; //Al seleccionar un input manda un true, Habilita o deshabilita el botón (variable boolean)
  totalSeleccionados: number = 0; //Rastrea total de usuarios seleccionados en función a los elementos true de usuariosSeleccionados
  datosUsuariosSeleccionados: any=[]; //contendra los datos del usuario
  totalEmpleados: any;
  totalEmpleadosArea:number = 0;
  totalEmpleadosSub:number =0;

  /*MODAL ELIMINAR SOLICITADAS*/
  showEliminar:boolean = false;
  showConfirmacion:boolean = false;

  constructor(
    private archivoCargadoService:ArchivoCargadoService,
    private tarjetasAsignadasService:TarjetasAsignadasService,
    private nomStatusService: NomStatusService,
    private statusEnvioRealizadoService: StatusEnvioRealizadoService,
    private statusEntregadasService: StatusEntregadasService,
    private datosUsuarioService:DatosUsuarioService,
    private generalCountService:CuentaGeneralService,
  ){
  this.datosUsuariosSeleccionados = this.usuariosPorArea;
  }
  ngOnInit():void{

    this.getAreas();
    this.getTarjetasSolicitadas();

    //console.log(this.usuariosSeleccionados);
    //this.getData();
    this.archivoCargadoService.obtenerAreas().subscribe({
      next:
      data => {
        this.info_archivo = data;
      },
      error:
      err=>{
        console.log(err);
      }
    });
    /*
    this.datosUsuarioService.obtenerPendientes().subscribe({
      next:
      data =>{
        this.datosUsuariosSeleccionados = data;
        console.log(this.datosUsuariosSeleccionados);
      },
      error:
      err =>{
        console.log(err);
      }
    });
    this.tarjetasAsignadasService.obtenerTarjetas().subscribe({
      next:
      data =>{
        this.tarjetasSolicitadas = data;
      },
      error:
      err =>{
        console.log(err);
      }
    });
    this.nomStatusService.obtenerStatus().subscribe({
      next:
      data =>{
        this.nombreStatus = data;
      },
      error:
      err =>{
        console.log(err);
      }
    });
    this.statusEnvioRealizadoService.obtenerStatusEnvioRealizado().subscribe({
      next:
      data =>{
        this.enviosRealizados = data;
      },
      error:
      err =>{
        console.log(err);
      }
    });
    this.statusEntregadasService.obtenerStatusEntregadas().subscribe({
      next:
      data =>{
        this.entregadas = data;
      },
      error:
      err =>{
        console.log(err);
      }
    });*/

  }

  getAreas() {
    const control = '51663539'
    this.generalCountService.getGeneralCount(control)
        .subscribe({
          next: data => {

            this.areas = [
              {
                area: data.area,
                empresa:data.empresa,
                lmwl: data.lmwl
              }
            ]
            this.getUserArea();

          },
          error:
            err => { 
              console.error('Error al llamar a la API',err);
          }
        });
  }

  getUserArea() {
    console.log(this.areas);
    this.usuariosPorArea = [];

      this.usuariosPorArea = this.areas.map((row:any) => ({
            /* console.log(row); */
            //idArea: row.idArea,
            //area: row.area,
            //limiteArea: row.limiteArea,
            //idLimiteCreditoArea: row.idLimiteCreditoArea,
            
            area: row.area.map((ar:any) => ({
              idArea: ar.idArea,
              limiteArea: ar.limiteArea,
              limiteAsignado: ar.limiteAsignado,
              nombreArea: ar.nombreArea,
              limiteDisponible: ar.limiteDisponible,
              saldoDisponible: ar.saldoDisponible,
              saldoGastado: ar.saldoGastado,
              empleadosArea: ar?.empleados.map((a:any) => ({
                idUsuario:a.id,
                usuario:`${a.nombre} ${a.apellidoP} ${a.apellidoM}`,
                limEmpleado:a.limEmpleado,
                ultimoDig:a.ultimoDig,
                //idNumero:a.idNumero,
                puesto:a.puestoEmpl,
              })),//Comineza el arreglo de subareas
              subareas:ar.subAreas.map((s:any) => ({
                  idSubarea:s.idArea,
                  subarea: s.nombArea,
                  limiteSub: s.limite,
                  limiteAsignado: s.limiteAsignado,
                  limiteDisponible: s.limiteDisponible,
                  saldoDisponible: s.saldoDisponible,
                  saldoGastado: s.saldoGastado,
                  //idLimiteSubArea:s.idLimiteSubArea,
                empleadosSub: s.lstEmpleado.map((e:any) => ({
                      idUsuarioSub: e.id,
                      usuario: `${e.nombre} ${e.apellidoP} ${e.apellidoM}`,
                      limEmpleado:e.limEmpleado,
                      ultimoDig:e.ultimoDig,
                      //idNumero:e.idNumero,
                      puesto:e.puestoEmpl
                }))
              })),
            }))
        }));

        console.log(this.usuariosPorArea);

        this.totalEmpleadosArea = 0;
        // Itera sobre las áreas.
        for (const area of this.usuariosPorArea[0].area) {  // Itera sobre las subáreas dentro de cada área.
          // Agrega el número de empleados de esta subárea al total.
          this.totalEmpleadosArea += area.empleadosArea.length;
          
          area.totalAreas = this.totalEmpleadosArea;
        }

        console.log('Número total de empleados Area:', this.totalEmpleadosArea);
          for (const area of this.usuariosPorArea[0].area) {    // Agrega el número de empleados de esta subárea al total.
            for (const subarea of area.subareas) { 
            this.totalEmpleadosSub += subarea.empleadosSub.length;
            }
          }
        console.log('Número total de empleados subarea:', this.totalEmpleadosSub);
        this.filtroAreas = [...this.getArea];

        this.totalEmpleados = this.totalEmpleadosArea + this.totalEmpleadosSub;

        console.log(this.totalEmpleados);

      
  }

getData(){
  this.archivoCargadoService.obtenerAreas().subscribe({
    next:
    data => {
      this.info_archivo = data;
      this.getAreas();
    },
    error:
    err=>{
      console.log(err);
    }
  })
}
getEstatus(){
  /*
  this.statusEntregadasService.obtenerStatusEntregadas().subscribe({
    next:
    data =>{
      this.entregadas = data;
    },
    error:
    err =>{
      console.log(err);
    }
  });*/
}
/* getAreas():void{//Datos del arreglo
  this.getArea = this.info_archivo
  .map(row => ({
    idArea: row.idArea,
    area: row.area,
    subareas: row.subarea?.map((t:any)=> ({
      idSubArea:t.idSubArea,
      nombre: t.nombre,
      empleados: t.empleados?.map((e:any)=>({
        idEmpleado: e.idEmpleado,
        nombre: e.nombre,
        correo: e.correo,
        limite_credito: e.limite_credito
      }))
    }))
  }));
  this.totalEmpleados = 0;
   // Itera sobre las áreas.
   for (const area of this.getArea) {  // Itera sobre las subáreas dentro de cada área.
    for (const subarea of area.subareas) {    // Agrega el número de empleados de esta subárea al total.
      this.totalEmpleados += subarea.empleados.length;
    }
    //area.totalAreas = this.totalEmpleados;
  }
  console.log('Número total de empleados:', this.totalEmpleados);
  /*for (const area of this.getArea) {  // Itera sobre las subáreas dentro de cada área.
    for (const subarea of area.subareas) {    // Agrega el número de empleados de esta subárea al total.
      for(const empleado of subarea.empleado){
        this.totalEmpleadosSub += empleado.empleados.length;
      }
    }
    //area.totalAreas = this.totalEmpleados;
  }
  console.log('Número total de empleados:', this.totalEmpleadosSub);
  this.filtroAreas = [...this.getArea];

} */

getTarjetasSolicitadas():void{

  const mapaStatus: { [key: number]: string } = {};
  this.nombreStatus.forEach(sta =>{
    mapaStatus[sta.idStatus] = sta.status;
  });
  const mapaArea: {[key: number]: string } = {};
  this.info_archivo.forEach(info =>{
    mapaArea[info.idArea] = info.area;
  })

  //this.getTarjetas = this.tarjetasSolicitadas
  this.pendientes = this.datosUsuariosSeleccionados
  .map((row:any) => ({
    idSolicitud: row.idSolicitud,
    idArea: row.idArea,
    area: row.area,
    idSubarea: row.idSubArea,
    subarea:row.subarea,
    idEmpleado:row.idEmpleado,
    nombre:row.nombre,
    correo:row.correo,
    limite_credito:row.limite_credito,
    status: mapaStatus[row.idStatus],
    fecha: row.fecha
  }));

  this.getEnvios = this.enviosRealizados
  .map(row => ({
    idSolicitud: row.idSolicitud,
    idArea: row.idArea,
    area: row.area,
    idSubarea: row.idSubArea,
    subarea:row.subarea,
    idEmpleado:row.idEmpleado,
    nombre:row.nombre,
    correo:row.correo,
    limite_credito:row.limite_credito,
    status: mapaStatus[row.idStatus],
    fecha: row.fecha
  }));
  this.getEntregadas = this.entregadas
  .map(row => ({
    idSolicitud: row.idSolicitud,
    idArea: row.idArea,
    area: row.area,
    idSubarea: row.idSubArea,
    subarea:row.subarea,
    idEmpleado:row.idEmpleado,
    nombre:row.nombre,
    correo:row.correo,
    limite_credito:row.limite_credito,
    status: mapaStatus[row.idStatus],
    fecha: row.fecha
  }));

  console.log(this.datosUsuariosSeleccionados);
}
eliminarDatos:any;
usuarioSelect({empleado,seleccionado}:{empleado:any; seleccionado:boolean}){
  if(seleccionado){
    this.usuariosSeleccionados[empleado.idEmpleado] = empleado;
    // Obtener los datos completos de un usuario seleccionado por su idEmpleado
    this.datosUsuariosSeleccionados = this.getInfoUserSelect(empleado.idEmpleado);
    //this.datosUsuariosSeleccionados = this.getInfoUserSelect(empleado.idEmpleado);
  }else{
    //delete this.usuariosSeleccionados[empleado.idEmpleado];
    //this.datosUsuariosSeleccionados = [];
    const index = this.datosUsuariosSeleccionados.findIndex((row:any) => row.idEmpleado === empleado.idEmpleado);
    if (index !== -1){
      this.datosUsuariosSeleccionados.splice(index, 1);
      console.log("Hecho")
    }

  }
  //Object.value ->arreglo de los valores booleanos
  //some -> Corrobora si al menos un usuario esta seleccionado (manda true)
  this.botonHabilitado =Object.values(this.usuariosSeleccionados).some((selected:any) => selected)as boolean;
    //Object -> Arreglo con los valores del objeto (usuariosSeleccionados)
  //filter-> Filtra valores true y obtiene la cantidad
  this.totalSeleccionados = Object.values(this.usuariosSeleccionados).filter(select => select).length;
  // Mostrar los empleados seleccionados en la consola
  //console.log(this.usuariosSeleccionados);
  console.log('Datos completos del usuario seleccionado:', this.datosUsuariosSeleccionados);
}

getInfoUserSelect(idEmpleado:number):any{
  // Buscar el usuario utilizando el idEmpleado
  for (const area of this.getArea) {
    for (const subarea of area.subareas) {
      const usuario = subarea.empleados.find((e: any) => e.idEmpleado === idEmpleado);
      if (usuario) {
        let date = new Date();
        this.datosUsuariosSeleccionados.push({
          idSolicitud:"Z9876542",
          idArea: area.idArea,
          area: area.area,
          idSubArea: subarea.idSubArea,
          subarea:subarea.nombre,
          idEmpleado:usuario.idEmpleado,
          nombre: usuario.nombre,
          correo: usuario.correo,
          limite_credito: usuario.limite_credito,
          idStatus:1,
          fecha:date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear(),
        });
      }
    }
  }
  return this.datosUsuariosSeleccionados.length >0 ? this.datosUsuariosSeleccionados:null; // Retorna null si no se encuentra el usuario
}
mostrarRastreo:boolean=false;
muestraStatus:boolean = false;
statusEnRuta:boolean = false;
statusEntregadas:boolean =false;
statusNoRecibido:boolean=false;
obtenerStatus:any=null;
getStatus(get:any):void{
  console.log(get);
  let todasLasTarjetas = this.pendientes.concat(this.getEnvios, this.getEntregadas);
  /*let [busquedaStatus] = this.getTarjetas.filter(row => row.idSolicitud === get.idSolicitud);
  this.obtenerStatus = busquedaStatus;
  let [busqueda] = this.getTarjetas.filter(row => row.idSolicitud === get.idSolicitud);
  this.obtenerStatus = busqueda;*/
  console.log(todasLasTarjetas);

  //console.log(this.obtenerStatus);

  let [busqueda] = todasLasTarjetas.filter(row => row.idEmpleado === get.idEmpleado);
  if (busqueda) {
      if (busqueda.status === "Pendiente de envío") {
        this.mostrarRastreo = true;
        this.tarjetasAsignadas = false;
        this.muestraStatus = true;
        this.statusEnRuta = false;
        this.statusEntregadas = false;
        this.statusNoRecibido = false;
      }
      if (busqueda.status === "Envio Realizado") {
        this.mostrarRastreo = true;
        this.tarjetasAsignadas = false;
        this.statusEnRuta = true;
        this.statusEntregadas = false;
        this.muestraStatus = false;
        this.statusNoRecibido = false;
      }
      if(busqueda.status === "Entregadas"){
        this.mostrarRastreo = true;
        this.tarjetasAsignadas = false;
        this.statusEntregadas = true;
        this.statusEnRuta = false;
        this.muestraStatus = false;
        this.statusNoRecibido = false;
      }
      if(busqueda.status === "No se recibieron"){
        this.mostrarRastreo = true;
        this.tarjetasAsignadas = false;
        this.statusNoRecibido = true;
        this.statusEntregadas = false;
        this.statusEnRuta = false;
        this.muestraStatus = false;

      }


    this.obtenerStatus = busqueda;
    console.log(this.obtenerStatus.area);
  }

}
/**ELIMINAR RASTREO - STATUS */
deleteStatus(eliminar:any):void{
  const index = this.getTarjetas.findIndex(row=> row.idSolicitud === eliminar.idSolicitud);
  console.log(eliminar);
  if(index !== -1){
    this.getTarjetas.splice(index, 1);
    this.mostrarRastreo = false;
    this.tarjetasAsignadas = true;
    this.statusNoRecibido = false;
    this.statusEntregadas = false;
    this.statusEnRuta = false;
    this.muestraStatus = false;
  }
  //ENVIO REALIZADO- ELIMINAR
  const indexEnvio = this.getEnvios.findIndex(row => row.idSolicitud === eliminar.idSolicitud);
  //console.log(this.eliminarTarjeta);
  if (indexEnvio !== -1){
    this.getEnvios.splice(indexEnvio, 1);
    this.mostrarRastreo = false;
    this.tarjetasAsignadas = true;
    this.statusNoRecibido = false;
    this.statusEntregadas = false;
    this.statusEnRuta = false;
    this.muestraStatus = false;
  }
   //ENTEGADAS - ELIMINAR
   const indexEntregadas = this.getEntregadas.findIndex(row => row.idSolicitud === eliminar.idSolicitud);
   //console.log(this.eliminarTarjeta);
   if (indexEntregadas !== -1){
     this.getEntregadas.splice(indexEntregadas, 1);
     this.mostrarRastreo = false;
     this.tarjetasAsignadas = true;
     this.statusNoRecibido = false;
     this.statusEntregadas = false;
     this.statusEnRuta = false;
     this.muestraStatus = false;
   }
}
/**TARJETAS ASIGNADAS */
eliminarTarjeta:any;
confirmarTarjeta:any;
deleteTarjetasAsignadas():void{
  //PENDIENTE DE ENVIO - ELIMINAR
  const index = this.pendientes.findIndex(row => row.idEmpleado === this.eliminarTarjeta.idEmpleado);
  console.log(this.eliminarTarjeta);
  if (index !== -1){
    this.pendientes.splice(index, 1);
    this.showEliminar = false; //Cierra Modal
  }
  //ENVIO REALIZADO- ELIMINAR
  const indexEnvio = this.getEnvios.findIndex(row => row.idEmpleado === this.eliminarTarjeta.idEmpleado);
  //console.log(this.eliminarTarjeta);
  if (indexEnvio !== -1){
    this.getEnvios.splice(indexEnvio, 1);
    this.showEliminar = false; //Cierra Modal
  }

  //ENTEGADAS - ELIMINAR
  const indexEntregadas = this.getEntregadas.findIndex(row => row.idEmpleado === this.eliminarTarjeta.idEmpleado);
  //console.log(this.eliminarTarjeta);
  if (indexEntregadas !== -1){
    this.getEntregadas.splice(indexEntregadas, 1);
    this.showEliminar = false; //Cierra Modal
  }
}
showEliminarTarjetas(tarjeta:any):void{
  this.showEliminar = true; //Muestra Modal
  this.eliminarTarjeta = tarjeta;
}
closedEliminar():void{
  this.showEliminar = false;
  this.showConfirmar
}
/**TARJETAS ASIGNADAS- CONFIRMACION */
showConfirmarTarjetas(tarjeta:any):void{
  this.showConfirmacion = true;
  this.confirmarTarjeta = tarjeta;
  console.log(tarjeta);
}
@Output() confirmar: EventEmitter<any> = new EventEmitter();
confirTarjeta():void{
  this.confirmar.emit(this.confirmarTarjeta);
  if(this.confirmarTarjeta){
    this.getEntregadas.push({
      idSolicitud:this.confirmarTarjeta.idSolicitud,
      idArea: this.confirmarTarjeta.idArea,
      area: this.confirmarTarjeta.area,
      idSubarea: this.confirmarTarjeta.idSubArea,
      subarea:this.confirmarTarjeta.nombre,
      idEmpleado:this.confirmarTarjeta.idEmpleado,
      nombre: this.confirmarTarjeta.nombre,
      correo: this.confirmarTarjeta.correo,
      limite_credito: this.confirmarTarjeta.limite_credito,
      status:"Entregadas",
      fecha:this.confirmarTarjeta.fecha
    });
    const index = this.getEnvios.findIndex((row:any) => row.idEmpleado === this.confirmarTarjeta.idEmpleado);
    if (index !== -1){
      this.getEnvios.splice(index, 1);
      console.log("Hecho")
    }
  }
  console.log(this.getEntregadas);
  this.showConfirmacion = false;
}
closedConfirmarcion():void{
  this.showConfirmacion = false;
  /*this.getTarjetas.forEach(tarjeta =>{
    tarjeta.seleccionada = false;
  })*/
  if(this.confirmarTarjeta){
    this.confirmarTarjeta.seleccionada = false;
  }
}


showSolicitar(){
  //this.entregadas = [];
  this.tarjetasAdicionales = true;
  this.tarjetasAsignadas = false;
  this.mostrarRastreo = false;
}
regresar(){
  this.mostrarRastreo = false;
  this.tarjetasAsignadas = true;
  this.muestraStatus = false;

}
 showModal(){
  this.modalLoading = true;
}
closedModal(){
  this.modalLoading = false;
  this.showArchivo = true;
  if(this.info_archivo.length === 0){
    this.getData();
  }else{
    this.getAreas();
  }
  //this.getAreas();
  this.tarjetasAdicionales=false;
}
addEmpleado(){
  this.modalEmpleado = true;

}
closeEmpleado(){
  this.modalEmpleado = false;
  this.getAreas();//Actualiza el arreglo
}
agregarUsuarios(eventData:{nuevoUsuario:any, usuarioSelect:any}):void{
  const nuevoUsuario = eventData.nuevoUsuario;
  const usuarioSelect = eventData.usuarioSelect;
console.log(nuevoUsuario);
console.log(usuarioSelect);
if (usuarioSelect) {

  // Obtener el área y subárea seleccionados
  //const idArea = this.valorSeleccionado.area;
  const idSubareaSelect = usuarioSelect.idSubArea;
  const areaEncontrada = this.info_archivo.find(a => {
    return a.subarea.some((subarea:any) => subarea.idSubArea === idSubareaSelect);

  });
  //const subareaEncontrada = areaEncontrada?.subarea.find((sa:any) => sa.nombre === subarea);
  if(areaEncontrada){
    const subareaEncontrada = areaEncontrada.subarea.find((subarea:any) => subarea.idSubArea === idSubareaSelect)
    if(subareaEncontrada){
      const nuevoId = this.generateRandomId(7);
         // Crear un objeto para el nuevo empleado
    const nuevoEmpleado = {
      idEmpleado: nuevoId, // Generar un ID único para el empleado
      nombre: nuevoUsuario.nombre,
      apellido: nuevoUsuario.apellido,
      homoclave:nuevoUsuario.homoclave,
      correo: nuevoUsuario.correo,
      limite_credito: nuevoUsuario.limiteCredito
    };
                // Agregar el nuevo empleado a la subárea
      subareaEncontrada.empleados.push(nuevoEmpleado);
      this.closeEmpleado();
      this.nuevoUsuario = {
        nombre:'',
        apellido:'',
        homoclave: '',
        correo: '',
        limiteCredito:null
      };
      this.valorSeleccionado = null;

    }
  }
}
}

generateRandomId(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomId = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
}


showCancelarProceso(){
  this.modalCancelarProceso = true;
}
closedCancelarProceso(){
  this.modalCancelarProceso = false;
}
cancelarProceso(){
  this.tarjetasAdicionales= true;
  this.modalCancelarProceso= false;
  this.showArchivo = false;
}
subarea: any[] =[];
usuarioAEliminar: any;
nombreUsuario:any;
area:string = "";
subareas:string = "";
showEliminarUsuario(empleado:any):void{
  //this.modalEliminarUsuario = true;
  //this.usuarioAEliminar = empleado;
  this.nombreUsuario = empleado;
  //this.empleados = area.subareas[0].empleados;
  //Busca el area que contenga el empleado
  const area = this.getArea.find(area=>
    area.subareas.some((sub:any)=>
    sub.empleados.some((e:any)=>
    e.idEmpleado === empleado.idEmpleado)
  ));
  if(area){
    const subarea = area.subareas.find((sub:any)=>
      sub.empleados.some((e:any) => e.idEmpleado === empleado.idEmpleado
    ));
    if(subarea){
      this.usuarioAEliminar ={
        idArea:area.idArea,
        idSubArea:subarea.idSubArea,
        idEmpleado:empleado.idEmpleado
      }
      this.modalEliminarUsuario =true;
    }
  }
}

eliminarUsuario():void{
  if(this.usuarioAEliminar){
    const idArea = this.usuarioAEliminar.idArea;
    const idSubArea = this.usuarioAEliminar.idSubArea;
    //const idEmpleado = this.usuarioAEliminar.idEmpleado;

    //Encuentra el area que tiene el usuario
    const area = this.getArea.find(area => area.idArea === idArea);


    if(area){
      //Encuentra el subarea dentro del area
      const subarea = area.subareas.find((sub:any)=> sub.idSubArea === idSubArea);

      if(subarea){
        //Encuentra el indice del empleado dentro de la subarea
        const empleadoIndex = subarea.empleados.findIndex((e:any) => e.idEmpleado === this.usuarioAEliminar.idEmpleado);

        if (empleadoIndex !== -1){

          //Eliminar usuario de la subarea
          subarea.empleados.splice(empleadoIndex, 1);
          this.modalEliminarUsuario = false;

          this.usuarioEliminado = {
            usuario:this.nombreUsuario,
            area: area.area,
            subarea: subarea.nombre
          }
          this.modalUsuarioEliminado= true;
          console.log(this.usuarioAEliminar)
          this.usuarioAEliminar = null;

        }
      }
    }

          }
        }


closeEliminarUsuario(){
  this.modalEliminarUsuario = false;
}
usuarioEliminado:any;
showUsuarioEliminado():void{
  this.modalUsuarioEliminado= true;
  this.modalEliminarUsuario = false;

}
closeUsuarioEliminado(){
  this.modalUsuarioEliminado = false;
  this.usuarioEliminado = null;
}
showConfirmar(){//Confirmar Trajetas al seleccionar usuarios
  //Obtener usuarios seleccionados
  //const usuariosSeleccionados = this.usuariosSeleccionados;
  this.modalConfirmarSolicitud = true;
  //this.totalSeleccionados = usuariosSeleccionados;
  //
}
closedConfirmar(){
  this.modalConfirmarSolicitud = false;
}
showSuperToken(){
  this.modalSuperToken = true;
  this.modalConfirmarSolicitud = false;
}
closedSuperToken(){
  this.modalSuperToken = false;
}
currentDate:string ='';
showComprobante(){
  this.modalComprobante = true;
  this.modalSuperToken = false;
  let date = new Date();
  this.currentDate = date.toLocaleString();

  //this.totalSeleccionados = 0;
  this.usuariosSeleccionados = {};
  //this.datosUsuariosSeleccionados = [];
  this.botonHabilitado = false;
  this.model = '';
  this.info_archivo = [];
}
closedComprobante(){
  this.modalComprobante = false;
  this.getTarjetasSolicitadas();
  this.tarjetasAdicionales = false;
  this.showArchivo=false;
  this.tarjetasAsignadas = true;

}
infoComprobante(eventData:{totalUserSelect:number; fecha:string; datosUsuariosSeleccionados:any[]}){
  this.closedComprobante();

  //this.getEntregadas;
  /*
  let date = new Date();
  let nuevoObjeto ={
    idSolicitud:"Z987654",
    noSolicitado:eventData.totalUserSelect,
    idArea:2000,
    idStatus:1,
    fecha:date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear(),
  };
  console.log(this.tarjetasSolicitadas);
  for(let i=0; i<nuevoObjeto.noSolicitado; i++){
  this.tarjetasSolicitadas.push({...nuevoObjeto}); //La notacion {...} realiza una copia o clonacion del objeto
  }
  console.log("correcto",this.getTarjetas);
  console.log(nuevoObjeto);
  console.log(eventData);*/
  /*
  if(this.entregadas.length === 0){
    this.getEstatus();
  }else{
    this.getTarjetasSolicitadas();
  }
  console.log(this.entregadas.length === 0)*/

}



model:string = '';
// Filtrado Input
filtroAreas: Array<any> = [];
filtroSubareas: Array<any> = [];
filtroEmpleados: Array<any> = [];

busquedas(obtener: any): void {
  console.log(obtener);
  console.log(this.filtroAreas);
  //console.log(this.filtroSubareas);
  //console.log(this.filtroEmpleados);

  this.model = obtener.trim().toLowerCase();

  if (this.model === '') {
    // Si no hay búsqueda, mostrar todas las áreas
    this.filtroAreas = [...this.getArea];
    //this.filtroSubareas = [];
    //this.filtroEmpleados = [];
  } else {
    /*// Filtrar áreas
    this.filtroAreas = this.getArea.filter((area) =>
      area.area.toLowerCase().includes(this.model.toLowerCase())
    );

    // Filtrar subáreas
    this.filtroSubareas = this.getArea.flatMap((area) =>
      area.subareas.filter((subarea:any) =>
        subarea.nombre.toLowerCase().includes(this.model.toLowerCase())
      )
    );

    // Filtrar empleados
    this.filtroEmpleados = this.getArea.flatMap((area) =>
      area.subareas.flatMap((subarea:any) =>
        subarea.empleados.filter((empleado:any) =>
          empleado.idEmpleado.toString().includes(this.model) ||
          empleado.nombre.toLowerCase().includes(this.model) ||
          empleado.correo.toLowerCase().includes(this.model)
        )
      )
    );
*/
    let result:any[] = [];
    let flagSubarea = false;
    let flagEmpleados = false;

    this.getArea.forEach(row => {
      if(row.area.toLowerCase().includes(this.model)){
        result.push(row);
      }
      row.subareas.forEach((sub:any) => {
        if(sub.nombre.toLowerCase().includes(this.model)){
          flagSubarea = true;
          result.push(row);
        }
        sub.empleados.forEach((emp:any) =>{
          if(emp.nombre.toLowerCase().includes(this.model)){
            flagEmpleados = true;
            result.push(row);
          }
        });
      });
    });
    let quitarDuplicados = result.filter((row,index) => result.indexOf(row) === index);
    this.filtroAreas = [...quitarDuplicados];

    if(flagSubarea){
      this.filtroAreas = quitarDuplicados.map(row => {
        let array:any[] = [];
        row.subareas.map((sub:any) =>{
          if(sub.nombre.toLowerCase().includes(this.model)){
          //if(sub.nombre === this.model){
            array.push(sub);
          }
        });
        //console.log(array);
        if(array.length > 0){
          return {...row,subareas:array}
        }else{
          return {...row}
        }
      });
    }
    if(flagEmpleados){
      this.filtroAreas = quitarDuplicados.map(row =>{
        return {...row,subareas:row.subareas.map((sub:any) => {
          let array:any[] = [];
          sub.empleados.map((empl:any) =>{
            if(empl.nombre.toLowerCase().includes(this.model)){
            //if(empl.nombre.toLowerCase() === this.model){
              array.push(empl);
            }
          });
          //console.log(array);
          if(array.length > 0){
            return {...sub,empleados:array}
          }else{
            return {...sub,empleados:[]}
          }
        }).filter((sub:any) => sub.empleados.length > 0)}
      });
    }
    console.log(flagSubarea,flagEmpleados);
  }
}

}
