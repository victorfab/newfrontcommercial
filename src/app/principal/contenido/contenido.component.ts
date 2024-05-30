import { DecimalPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Input } from '@angular/core'; // Padre -hijo
import { Output, EventEmitter } from '@angular/core';//Hijo - padre
import { NavigationEnd, Router } from '@angular/router';
import { catchError, map, pipe, throwError } from 'rxjs';
import { ModalAutenticacionComponent } from 'src/app/mis-productos/modal-autenticacion/modal-autenticacion.component';
import { ModalComprobanteLimiteAreaComponent } from 'src/app/mis-productos/modal-comprobante-limite-area/modal-comprobante-limite-area.component';
import { ModalComprobanteLimiteEmpleadoComponent } from 'src/app/mis-productos/modal-comprobante-limite-empleado/modal-comprobante-limite-empleado.component';
import { ModalSupertokenLimiteEmpleadoComponent } from 'src/app/mis-productos/modal-supertoken-limite-empleado/modal-supertoken-limite-empleado.component';
import { AreasService } from 'src/app/services/areas.service';
import { CuentaGeneralService } from 'src/app/services/cuenta-general.service';
import { EditLimiteEmplService } from 'src/app/services/edit-limite-empl.service';
import { EmpleadoTarjetaService } from 'src/app/services/empleado-tarjeta.service';
import { MovimientosEmpleadosService } from 'src/app/services/movimientos-empleados.service';
import { TarjetaAreaService } from 'src/app/services/tarjeta-area.service';
import { TarjetaSubareaService } from 'src/app/services/tarjeta-subarea.service';
import { TarjetaUsuarioService } from 'src/app/services/tarjeta-usuario.service';
import { TarjetaUsuariosSubService } from 'src/app/services/tarjeta-usuarios-sub.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

interface ResultadoFinal {
  fecha: string;
  tipo: { nombre:string; cantidad:number}[];
}

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})

export class ContenidoComponent implements OnInit {
  @Input() titulo = '';
  @Output() liked = new EventEmitter <string> ();
  //Limpia inputs modal autenticación
  @ViewChild(ModalAutenticacionComponent) modalAutenticacionComponent!:ModalAutenticacionComponent;
  @ViewChild(ModalSupertokenLimiteEmpleadoComponent) modalSupertokenLimiteEmpleadoComponent!:ModalSupertokenLimiteEmpleadoComponent;
  @ViewChild(ModalComprobanteLimiteEmpleadoComponent)modalComprobanteLimiteEmpleadoComponent!: ModalComprobanteLimiteEmpleadoComponent;
  @ViewChild(ModalComprobanteLimiteAreaComponent)modalComprobanteLimiteAreaComponent!: ModalComprobanteLimiteAreaComponent;

  @Output() usuariosPorArea: any=[];

  movimientos:Array<any> = [];
  movimientosUsuario:Array<any>=[];
  usuarios:Array<any>= [];
  totalEmpleados: any = {};
  countEmpleados: any;
  numeroUsuarioSub:Array<any>=[];
  areas:Array<any> = [];
  /**empleadosTarjeta */
  emplTrjArea:Array<any> = [];
  emplMovimientos: Array<any> = [];
  mapeoFecha:any;
  droDisponible: any;
  cardNum:any;
  lmtCredito: any;
  sldGastado: any ;
  lnaAsiganada: any = null;
  pgoMinimo: any = null;
  fchLimite: any = null;
  fchCorte: any = null;

  numeroTarjeta:Array<any> = [];
  limite_credito_area:Array<any> = [];
  tarjetaSubArea:Array<any> = [];

  //Model del filtrado
  modelarea:string = '';
  modelsub:string = '';
  model:string = '';
  modelnotarjeta:number = 0;

  //Filtrado Input
  filtroarea:Array<any> = [];
  filtroSubarea:Array<any> = [];
  filtro:Array<any> = [] ;
  filtronumero:Array<any> = [];

  mostrarDatos:boolean = true;
  datosareas:boolean = true;
  datosUsuarios:boolean = true;
  datosnumero:boolean = true;

  mostrar_area_user:boolean = false;
  mostrar_notarjeta: boolean = false;
  mostrarLimiteUsuario:boolean = false;

  mostrarInfo_por_area:boolean = false;
  mostrarInfo_por_usuario:boolean = false;
  mostrarMovimientosUsuario:boolean=false;
  movimientosUserSubarea:boolean = false;

  showLimiteCreditoSub:boolean = false;
  showEmpleadosSub:boolean = false;

  areaSeleccionada: any = null;
  subareaDeArea: any = null;
  numeroSeleccionado:any = null;
  areaLimiteCredito:any = null;
  usuarioLimiteCredito:any ={};
  usuarioSub:any = {};
  limiteCreditoUsers:any=null;
  limiteCreditoArea:any=null;
  limiteCreditoUser:any = null;
  movimientosUser:Array<any> = []
  limiteCredito_area:boolean = false;

  limitCreditoSub:any = null;
  creditoSub:any =null;
  showLimiteCredito:boolean = false;
  usersSubLimiteCredito : any = null;
  userSubLimite: any ={};
  limiteCreditoUsuarioSub:any = null;
  showUserSub:boolean = false;
  /**MOVIMIENTOS USUARIO SUBAREA */
  movimientosUserSub:Array<any> =[];
  filtrarMesUserSub:Array<any> = []

  usuariosAreaSeleccionada:any = [];
  usuariosSubArea:any =[];
  usuariosInfo:any = [];

  exportArea:any = null;
  obtidArea : any = null;
  idArea: any = null;
  idSubArea: any = null;
  isSubarea:boolean = false;
  obtidSub: any = null;
  expoInfoUsuario:any = null;
  exportInfoCreditoUser:any = null;

  exportSubArea:any = null;
  areaLimiteCreditoModal:any = null;
  limiteCreditoAreaModal:any = null;
  limiteCreditoUsersModal:any = null;

  movimientosPositivos:any = null;
  movimientosNegativos:any=null;

  /**Empleados Area */
  empleadosTarjetaArea: any = [];
  limiteEmpl:any = [];
  muestraModal:boolean = false;
  muestraModalArea:boolean = false;
  showModalSubArea:boolean = false;
  muestraUsuarios:boolean = true;
  masUsers:boolean = false;
  muestraMovimientos:boolean = true;
  masMovi:boolean = false;

  //USUARIOS SUB
  masMovimientos:boolean = true;
  moreMovi:boolean = false;
  select:any;
  filtrarMes:Array<any> = []
  periodoInicial : any = null;
  periodoFinal : any = null;
  currentMonth: number = new Date().getMonth();
  selectButton: string = 'actual';
  selectMovimiento:string = 'todo';
  showTarjetasAdicionales:boolean = false;

  /**INFO EMPRESA */
  limiteEmpresa:any;
  mostrarLimite:boolean = false;
  verMas:boolean = false;
  infoEmpleado: any = null;
  /**AUTHENTICATION */
  showAuthentication:boolean = false;
  closedAuthentication:boolean = false;
  elementoSeleccionado:string ="";

  constructor(
                private _generalCountService: CuentaGeneralService,
                private _empleadoTarjetaService: EmpleadoTarjetaService,
                private _movimientosEmpleadosService: MovimientosEmpleadosService,
                private _editLimiteEmplService: EditLimiteEmplService,
                private _AreaService: AreasService,
                private _router: Router,
                private _decimalPipe: DecimalPipe
  ) {
      this._router.events.subscribe((event) => {
        if(event instanceof NavigationEnd) {
          this.elementoSeleccionado = 'mis-productos'
        }
      });
    }

  ngOnInit() {

    this.validateDataUser();

  }

  validateDataUser() {

    const buc_fake = '51663539';

    return this._generalCountService.getGeneralCount(buc_fake)
                .subscribe({
                  next: (data:any) => { 
                      
                      console.log('Res data estructura', data);

                      if( !data.errors ) {
                        console.log('si hay info');
                        
                        this.areas = [
                          {
                            area: data.area,
                            empresa: data.empresa,
                            lmwl: data.lmwl
                          }
                        ]
                        
                        this.getUserArea();
                        console.log(this.areas);
                      } else {
                        console.log('no hay info');
                        //Antes del redirect, 
                        //Consultar con el buc la empresa
                        //Gurardar la empresa
                        this._router.navigate(['/initial-configuration/company-structure']);
                      }  

                  }
                });
  }

  getUserArea():void {
    console.log('this.areas', this.areas);
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
        empleadosArea: ar.empleados.map((a:any) => ({
          idUsuario: a.id,
          usuario: `${a.nombre} ${a.apellidoP} ${a.apellidoM}`,
          limEmpleado: a.limEmpleado,
          ultimoDig: a.ultimoDig,
          puesto: a.puestoEmpl,
        })),//Comineza el arreglo de subareas
        subareas:ar.subAreas.map((s:any)=> ({
          idSubarea: s.idArea,
          subarea: s.nombArea,
          limiteSub: s.limite,
          limiteAsignado: s.limiteAsignado,
          limiteDisponible: s.limiteDisponible,
          saldoDisponible: s.saldoDisponible,
          saldoGastado: s.saldoGastado,
          empleadosSub: s.lstEmpleado?.map((e:any)=>({
            idUsuarioSub: e.id,
            usuario: `${e.nombre} ${e.apellidoP} ${e.apellidoM}`,
            limEmpleado: e.limEmpleado,
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

      const nombreArea = area.area;
      this.idArea = area.idArea;
      let empleadosArea = 0;
      
      if(area.empleadosArea){
        empleadosArea += area.empleadosArea.length;
      }

      if(area.subareas){
        area.subareas.forEach((subarea:any)=>{

          this.idSubArea = subarea.idArea;

          if(subarea.empleadosSub){
            empleadosArea += subarea.empleadosSub.length;
          }
        });
      }

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

   /********Empleados área******* */
  postData(idUsuario: string) {
    const postData = {
      "id": idUsuario,
      "buc": '51663539'
    };

    this._empleadoTarjetaService.postData(postData)
        .subscribe((resp:any) => {
          console.log('resp empleadotarjetaservice', resp);
          this.emplTrjArea = resp;
          this.emplTrjArea = [
              {
                dineroDisponible: resp.cardRec.cardInfo.acctRef.acctInfo.acctBal[0].curAmt,
                cardNum: resp.cardRec.cardInfo.cardNum,
                limiteCredito: resp.cardRec.cardInfo.cardTrnLimit[0].curAmt,
                fechaLimite: resp.fechaLimite,
                fechaCorte: resp.fechaCorte,
                lineaAsignada: resp.lineaAsignada,
                pagoMinimo: resp.pagoMinimo
              }
            ];
          this.sendPostRequest();
          this.sendPostMovimientos(this.cardNum);
          console.log('this.emplTrjArea', this.emplTrjArea);
        },
        error => {
          console.log(error);
          if(error.error && error.error.errors) {
            console.log("detalle", error.error.errors);
          }
            console.log('Mensaje',error.message);
        });
  }

  sendPostRequest() {

    this.empleadosTarjetaArea = this.emplTrjArea.map(row => ({
      cardNum:{
        numero: row.cardNum
      },
      dineroDisponible: {
        disponible: row.dineroDisponible.amt,
      },
        fechaLimite: row.fechaLimite,
        fechaCorte: row.fechaCorte,
        lineaAsignada: row.lineaAsignada,
        pagoMinimo: row.pagoMinimo
    }));
    
          const [getNum] = this.empleadosTarjetaArea.map((row:any)=> row.cardNum.numero);
          this.cardNum = getNum;
          const [getDinero] = this.empleadosTarjetaArea.map((row:any )=> Number(row.dineroDisponible.disponible));
          this.droDisponible = getDinero;
          this.sldGastado = this.lmtCredito - this.droDisponible;
          const [getAsignada] = this.empleadosTarjetaArea.map((row:any)=> row.lineaAsignada);
          this.lnaAsiganada = getAsignada;
          const [getMinimo] = this.empleadosTarjetaArea.map((row:any)=> row.pagoMinimo);
          this.pgoMinimo = getMinimo;
          const [getFecha] = this.empleadosTarjetaArea.map((row:any) => row.fechaLimite);
          this.fchLimite = getFecha;
          const [getFechaCorte] = this.empleadosTarjetaArea.map((row:any) => row.fechaCorte);
          this.fchCorte = getFechaCorte;

          console.log('this.droDisponible', this.droDisponible);
          console.log('this.sldGastado', this.sldGastado);
          console.log('this.lnaAsiganada', this.lnaAsiganada);
          console.log('this.pgoMinimo', this.pgoMinimo);
          console.log('this.fchLimite', this.fchLimite);
          console.log('this.fchCorte', this.fchCorte);
  }

  resultadosFinales: ResultadoFinal[] = [];
  
  sendPostMovimientos(cardNum: string) {
    // Definir una interfaz para el tipo de datos esperado
    const postNum = {
      numero: cardNum,
    };

    this._movimientosEmpleadosService.postMovimientos(postNum).subscribe((mov: any) => {
      
      this.resultadosFinales = [];
      mov.movimientos.acctTrnRec.forEach((movimiento:any) => {
       
        const fecha = movimiento.acctTrnInfo.stmtDt;
        const nombre = movimiento.acctTrnInfo.trnSubType;
        const cantidad = movimiento.acctTrnInfo.origCurAmt.amt;

        // Buscar si ya existe una entrada para la fecha actual en resultadosFinales
        const resultadoExistente = this.resultadosFinales.find((resultado) => resultado.fecha === fecha);

        if (resultadoExistente) {
          // Si ya existe una entrada para la fecha, agregar el nuevo tipo
          resultadoExistente.tipo.push({
            nombre: nombre,
            cantidad: cantidad,
          });
        } else {
          // Si no existe una entrada para la fecha, crear una nueva entrada
          this.resultadosFinales.push({
            fecha: fecha,
            tipo: [{
              nombre: nombre,
              cantidad: cantidad,
            }],
          });
        }
      });

      //console.log(this.resultadosFinales);
      // this.resultadosFinales = resultadosFinales;
      this.movimientosUser = this.resultadosFinales
      //.filter(movimiento => movimiento.idUsuario === this.selectUser.idUsuario)
      .sort((a,b) => a.fecha.localeCompare(b.fecha))
      .map(movimiento => ({
        fecha: movimiento.fecha,
        movimientos: movimiento.tipo?.map((t:any )=> ({ nombre: t.nombre, cantidad: t.cantidad}))
      }));
      /**FILTRAR MOVIMIENTOS */
      this.movimientosUser.reverse();
      this.updateMes();
      console.log(this.movimientosUser);
      //this.export();

    });

  }

  mostrarAuthentication() {
    this.showAuthentication = true;

    if(this.mostrarLimite){
      this.showAuthentication = false;
      this.mostrarLimite = false;
      this.limiteEmpresa = '****';
    }
  }
  closeAuthentication() {
    this.showAuthentication = false;
    //Obtener método de componente-hijo
    this.modalAutenticacionComponent.limpiarInputs();
  }
  mostrarLimiteEmpresa() {
    this.showAuthentication = false;
    this.mostrarLimite = true;
  }

  activarEdicion():void {
    //No devuelve ningun parametro
    this.mostrarDatos = false;
  }
  regresarArea(ruta:string):void {
    //console.log("Clic")
    this._router.navigate([ruta]);
  }
  return() { //Regresar al limite de crédito general
    this.mostrarDatos = true;
    this.mostrarDiv = true;
    this.mostrarInfo_por_area = false;
    this.limiteCredito_area = false;
    this.mostrarInfo_por_usuario = false;
    this.mostrarMovimientosUsuario = false;
    this.showLimiteCredito = false;
    this.showLimiteCreditoSub = false;
    this.mostrarLimiteUsuario = false;
    this.modelsub = '';
  }

/*   activarArea_user(area: any): void {
    console.log('area', area);

    let [busquedaArea] = this.usuariosPorArea.map((row: any) => {
      // Cambio aquí, comparando con row.area en lugar de row.nombreArea
      return row.area.find((ar: any) => ar.nombreArea === area);
    });

    if (busquedaArea) {
      this.areaSeleccionada = busquedaArea;
    //console.log(this.areaSeleccionada);

      this.subareaDeArea = this.areaSeleccionada.subareas;
    //console.log(this.subareaDeArea);


      if (this.subareaDeArea) {
        for (const subarea of this.subareaDeArea) {
          if (subarea.empleadosSub) {
            this.usuariosSubArea = subarea.empleadosSub;
          }
        }
      }

      if (this.areaSeleccionada.empleadosArea) {
        this.usuariosAreaSeleccionada = this.areaSeleccionada.empleadosArea;
        this.mostrar_area_user = true;
      }
    }

    if (this.areaSeleccionada) {
      this.select = this.areaSeleccionada.nombreArea;
    } else {
      this.select = null;
    }
  } */
  
/*   activarNotarjeta(numero:number):void {
    //this.numeroSeleccionado = this.filtronumero.find(numero => numero.id === id);
    //let [usuario]= this.usuariosPorArea.filter((i:any)=> i.idNumero === numero);
    //this.numeroSeleccionado = usuario;
    let [busquedaNumero]= this.numeroTarjeta.filter(row => row.numero === numero);
    if(busquedaNumero){
    this.numeroSeleccionado = busquedaNumero;
    }

    let [busquedaSub]= this.numeroUsuarioSub.filter(row => row.numero === numero);
    if(busquedaSub){
    this.numeroSeleccionado = busquedaSub;
    }
    //this.usuariosNumeroSeleccionado = this.usuarios.filter(usuario => usuario.idNumero === this.numeroSeleccionado.idNumero);
    this.mostrar_notarjeta = true;
    //this.select= this.numeroSeleccionado.numero;
    console.log('this.numeroSeleccionado.usuario', this.numeroSeleccionado.usuario);
  } */

  infoArea(limit:any):void {
    console.log('limit', limit);
    this.getUserArea(); //carda nuevamente el primer servicio
    this.datosareas = false;
    this.showSubareas = false;
    this.datosUsuarios = false;
    this.datosnumero = false;
    this.mostrar_area_user = false;
    this.mostrarDatos = false;
    this.mostrarDiv = false;

    let [busquedaAreaLimite] = this.usuariosPorArea
    .map((row: any) => row.area.find((ar: any) => ar.nombreArea === limit));

      if(busquedaAreaLimite) {
        //Info área
        this.areaLimiteCredito = busquedaAreaLimite;
        //Empleados area
        this.limiteCreditoUsers = this.areaLimiteCredito.empleadosArea;
        console.log('this.limiteCreditoUsers', this.limiteCreditoUsers);

      }
    this.mostrarInfo_por_area = true;
    this.limiteCredito_area = true;
  }

  editandoLimiteCredito = false;
  nuevoLimite: string = '';
  obtenerLimite:any;
  showEditarLimite:boolean = false;
  limiteInicial:any;
  nuevoLimiteEdit:any;

  activarEdicionLimite(event:string) {
    console.log('event activarEdicionLimite', event);
    this.editandoLimiteCredito = true
    this.nuevoLimite = this.limiteCreditoArea;
    this.limiteInicial = event; //Obtiene el limite inicial
    console.log('limiteInicial', this.limiteInicial);
  }

  guardarNuevoLimite() {
      console.log('guardarNuevoLimite');
      this.limiteCreditoArea = this.obtenerLimite;
      this.editandoLimiteCredito = false;
      if(this.nuevoLimiteEdit && this.nuevoLimiteEdit.nativeElement){
        this.nuevoLimiteEdit.nativeElement.innerText = `${this.obtenerLimite}`;
        this.showEditarLimite = false;
      }
      //this.modalComprobanteLimiteAreaComponent.folioReferencia();
    //console.log(this.obtenerLimite);
  }

  mostrarEditarLimite(eventData:any):void {
    console.log('event mostrarEditarLimite', eventData);
    this.editandoLimiteCredito = false;
    this.showEditarLimite = true;
    this.obtenerLimite = eventData.nuevoLimite; //Obtiene lo escrito por el usuario
    this.nuevoLimiteEdit = `${this.obtenerLimite}`;//Refiere al elemento donde se hace el cambio
    //console.log(this.obtenerLimite);
    //console.log(this.nuevoLimiteEdit);
  }
  closedLimite():void {
    //CANCELA LA EDICION DE LIMITE
    console.log('closedLimite');
    this.nuevoLimite = this.limiteInicial;
    this.showEditarLimite = false;

    if(this.nuevoLimiteEdit) {
      const formatNumber = this._decimalPipe.transform(this.nuevoLimite, '1.2-2');

      this.nuevoLimiteEdit.innerText = formatNumber;
      this.cerrarLimite();
    }
    
  }

  //******SUPERTOKEN - LIMITE AREA */
showTokenLimiteArea: boolean = false;
showComprobanteLimiteArea:boolean = false;
tokenLimiteArea() {
  /* this.showTokenLimiteArea = true;
  this.showEditarLimite = false; */
  console.log('this.limiteEmpresa', this.limiteEmpresa);
  console.log('this.areaLimiteCredito.limiteArea', this.areaLimiteCredito.limiteArea);
  const postData =
  {
    idArea:this.obtidArea,
    totalEmpresa: this.limiteEmpresa,
    limit:this.nuevoLimiteEdit = `${this.areaLimiteCredito.limiteArea}`,
  }

  this._AreaService.postEditLimiteArea(postData).subscribe(( response:any )=> {
    console.log(response);
    console.log(postData);
    console.log('this.nuevoLimiteEditEmp', this.nuevoLimiteEditEmp);
    console.log('this.nuevoLimiteEdit', this.nuevoLimiteEdit);
    console.log(this.lmtCredito);

    if(response && response.message === 'OK') {
      this.showEditarLimite = false;
      this.guardarNuevoLimite();
      this.showTokenLimiteArea = false;
    }
    if(response && response.message === "Límite excedido") {
      this.showEditarLimite = false;
      /* this.nuevoLimite = this.areaLimiteCredito.limiteArea; */
      this.mostrarExcederLimite();
      console.log("Limite excedido", this.areaLimiteCredito.limiteArea);
      console.log('this.nuevoLimite', this.nuevoLimite);
    }
  });
}
closedTokenArea(){
      //CANCELA LA EDICION DE LIMITE
      this.nuevoLimite = this.limiteCreditoArea.limite_credito;
      this.editandoLimiteCredito = false;

      if(this.nuevoLimiteEdit && this.nuevoLimiteEdit.nativeElement){
        this.nuevoLimiteEdit.nativeElement.innerText = `${this.nuevoLimite}`;
        this.showTokenLimiteArea = false;
      }
}
comprobanteLimiteArea(){
  this.showComprobanteLimiteArea = true;
  this.showTokenLimiteArea = false;
}
closedComprobante(){
  this.showComprobanteLimiteArea = false;
}

infoSubArea(limit:any):void{
   //console.log(limit);
   this.getUserArea(); //carda nuevamente el primer servicio
    this.datosareas = false;
    this.showSubareas = false;
    this.datosUsuarios = false;
    this.datosnumero = false;
    this.mostrar_area_user = false;
    this.mostrarDatos = false;
    this.mostrarDiv = false;

      for(const area of this.usuariosPorArea){
        if(area.area){
          for( const a of area.area){
            if(a.subareas){
              const busquedaSubarea = a.subareas.find((sub:any)=>sub.subarea === limit);
              if(busquedaSubarea){
                //Info subarea
                this.limitCreditoSub = busquedaSubarea;
                //Usuarios subarea
                this.limiteCreditoUsers = this.limitCreditoSub.empleadosSub;
                //console.log(this.limiteCreditoUsers)
              }
            }
          }
        }
      }

    //if(limiteCredito){
      //const {saldo_disponible,saldo_gastado,fecha_limite} = limiteCredito;
    //}
    //this.limiteCreditoUsers = this.usuarios.filter(usuario => usuario.idArea === this.areaLimiteCredito.idArea);

    if(this.limitCreditoSub){
      this.select = this.limitCreditoSub.subarea;
    }else{
      this.select = null;
    }
    //console.log(this.select);

    //console.log(this.usersSubLimiteCredito);
    //this.limiteCreditoArea = this.areas.filter(limit => limit.idLimiteCreditoArea === this.areaLimiteCredito.idLimiteCreditoArea);

    this.showLimiteCreditoSub = true;
    this.showLimiteCredito = true;
  }

  //*******EDITAR LIMITE CREDITO SUBAREA */
  editandoLimiteSub = false;
  nuevoLimiteSub: string = '';
  obtenerLimiteSub:any;
  showEditarLimiteSub:boolean = false;
  limiteInicialSub:any;
  nuevoLimiteEditSub:any;
  activarLimiteSub(event:any):void{
    this.editandoLimiteSub = true;
    this.nuevoLimiteSub = this.creditoSub;
    this.limiteInicialSub = event;
    //console.log(event)
  }
  guardarNuevoLimiteSub(){
    console.log('Guardar Limite SUB');
    this.creditoSub = this.obtenerLimiteSub;
    this.editandoLimiteSub = false;
    if(this.nuevoLimiteEditSub && this.nuevoLimiteEditSub.nativeElement){
      this.nuevoLimiteEditSub.nativeElement.innerText = `${this.obtenerLimiteSub}`;
      this.showEditarLimiteSub = false;
    }
  }
  mostrarLimiteSub(eventData:any):void{
    this.editandoLimiteSub = false;
    this.showEditarLimiteSub = true;
    this.obtenerLimiteSub = eventData.nuevoLimite;
    this.nuevoLimiteEditSub = eventData.limiteEditable;
  }
  closedLimiteSub(){
    this.nuevoLimiteSub = this.creditoSub;
    this.editandoLimiteSub = false;
    if(this.nuevoLimiteEditSub && this.nuevoLimiteEditSub.nativeElement){
      this.nuevoLimiteEditSub.nativeElement.innerText = `${this.nuevoLimiteSub}`;
      this.showEditarLimiteSub = false;
    }
  }
  //****TOKEN - LIMITE- SUBAREA */
  showTokenLimiteSubarea:boolean = false;
  showComprobanteLimiteSubarea: boolean = false;
  tokenLimiteSubArea(){
    console.log('LIMITE SUB AREA');
    //this.showTokenLimiteSubarea = true;
    //this.showEditarLimiteSub = false;
    this.guardarNuevoLimiteSub();
  }
  closedTokenSubarea(){
    //CANCELA CAMBIO DE LIMITE
    this.nuevoLimiteSub = this.creditoSub.limite_credito;
    this.editandoLimiteSub = false;

    if(this.nuevoLimiteEditSub && this.nuevoLimiteEditSub.nativeElement){
      this.nuevoLimiteEditSub.nativeElement.innerText = `${this.nuevoLimiteSub}`
      this.showTokenLimiteSubarea = false;
    }
  }
  //***COMPROBANTE - LIMITE- SUBAREA */
  comprobanteLimiteSubarea(){
    this.showComprobanteLimiteSubarea = true;
    this.showTokenLimiteSubarea = false;
  }
  closedComprobanteSubarea(){
    this.showComprobanteLimiteSubarea = false;
  }

  selectUser:any = null;
infoUsuario(limituser:any):void{
    //this.getUserArea(); //carda nuevamente el primer servicio
    //console.log(this.usuariosPorArea);

    //this.usuarioLimiteCredito = {};
    this.mostrarDatos = false;
    this.mostrarDiv=false;
    this.mostrar_area_user = false;

    this.datosareas = false;
    this.showSubareas = false;
    this.datosUsuarios = false;
    this.datosnumero = false;

    this.mostrarInfo_por_area = false;
    this.limiteCredito_area = false;
    this.showLimiteCreditoSub = false;
    this.showLimiteCredito = false;
    //Obtiene datos del usuario seleccionado
    /*let [busquedaUsuarioLimite] = this.usuarios.filter(row => row.usuario === limituser);
    this.usuarioLimiteCredito = busquedaUsuarioLimite;*/
    this.selectUser = null;
    this.limiteCreditoUser = null;
    this.usuarioLimiteCredito = null;
    this.exportSubArea = '';
    this.userSubLimite = null;
    this.limiteCreditoUsuarioSub = null;
    this.movimientosUserSub = [];


    for(const area of this.usuariosPorArea){ //Usuario área
      if(area.area){
        for(const a of area.area){
          const busquedaUsuarioArea = a.empleadosArea.find((row:any)=> row.usuario === limituser);
          if(busquedaUsuarioArea){
            //this.usuarioLimiteCredito = busquedaUsuarioArea;
            this.selectUser = busquedaUsuarioArea;
            //console.log(this.selectUser);

            this.exportArea = a.nombreArea; //Obtiene nombre del area
            this.obtidArea = a.idArea; //Obtiene id Area
            //console.log(a.idArea);
            this.isSubarea = false;

            this.select = this.selectUser.idUsuario;
            this.lmtCredito = this.selectUser.limEmpleado;
            //console.log(this.lmtCredito);
            this.postData(this.select);
            break;
          }



      if(a.subareas){//Usuarios subárea
      //console.log("hola");

        for(const subarea of a.subareas){
          if(subarea.empleadosSub){
            const busquedaUsuarioSub = subarea.empleadosSub.find((row:any)=> row.usuario === limituser);
            if(busquedaUsuarioSub){
              //this.userSubLimite = busquedaUsuarioSub;
              this.selectUser = busquedaUsuarioSub;
              //console.log(this.selectUser);

              this.exportArea = subarea.subarea; //Obtiene nombre de subarea
              this.obtidSub = subarea.idSubarea; //Obtiene idSubarea
              this.obtidArea = a.idArea; //Obtiene id Area

              console.log(a.idArea);
              console.log(this.obtidSub);
              this.isSubarea = true;
              this.select = this.selectUser.idUsuarioSub;
              this.lmtCredito = this.selectUser.limEmpleado;
              //console.log(this.lmtCredito);
              //console.log(this.select);

              this.postData(this.select);

              break;

              /*let [limiteCredito] = this.numeroUsuarioSub.filter(credito => credito.idNumero === this.selectUser.idNumero);
              //this.limiteCreditoUsuarioSub = limitCredito;
              this.limiteCreditoUser = limiteCredito;

              this.movimientosUser = this.movimientosUsuario //Movimientos usuarios subarea
              .filter(movimiento => movimiento.idUsuarioSub === this.selectUser.idUsuarioSub)
              .sort((a,b) => a.fecha.localeCompare(b.fecha))
              .map(movimiento =>({
                fecha: movimiento.fecha,
                movimientos: movimiento.tipo?.map((t:any )=> ({ nombre: t?.nombre, cantidad: t?.cantidad}))
              }));
              //Coloca las fechas de mayor a menor
              //.slice(0, this.movimientosCont + 10);*/

            }
          }
        }
        }
      }
    }
  }
  //console.log(this.movimientosUser.length)
  //console.log(this.filtrarMes.length)

  //this.updateMes();

    //let [busquedaAreaLimite] = this.areas.filter(row => row.idArea === this.usuarioLimiteCredito.idArea);
    //this.exportArea = busquedaAreaLimite;
    this.mostrarInfo_por_usuario = true;
    this.mostrarLimiteUsuario = true;
    this.mostrarMovimientosUsuario= true;

  }
  numeroClick(user:any):void{
    //console.log(user);
// Iterar sobre las áreas
for (const area of this.usuariosPorArea) {
  // Usuario área
  if (area.area) {
    for (const a of area.area) {
      const busquedaUsuarioArea = a.empleadosArea.find((row: any) => row.usuario === user);
      if (busquedaUsuarioArea) {
        // Usuario encontrado en el área
        this.infoUsuario(user);
      }

    // Usuarios subárea dentro del área seleccionada
    if (a.subareas) {
      for (const subarea of a.subareas) {
        if (subarea.empleadosSub) {
          const busquedaUsuarioSub = subarea.empleadosSub.find((row: any) => row.usuario === user);
          if (busquedaUsuarioSub) {
            // Usuario encontrado en la subárea
            this.infoUsuario(user);
          }
        }
      }
      }
    }
  }
}
  }
  /**EDITAR LIMITE EMPLEADO */

  editandoLimiteEmp = false;
  nuevoLimiteEmp: any;
  obtenerLimiteEmp:any;
  showEditarLimiteEmp:boolean = false;
  limiteInicialEmp:any;
  nuevoLimiteEditEmp:any;
  showExcedenteLimite : boolean = false;
  cerrarLimite(){
    this.showEditarLimiteEmp = false;
  }

  activarLimiteEmp(event:any):void{
      this.editandoLimiteEmp = true;
      this.nuevoLimiteEmp = this.lmtCredito;
      this.limiteInicialEmp = event;
      //console.log(this.limiteInicialEmp)
      //console.log(event)
      //console.log(this.nuevoLimiteEmp);
    }

    guardarNuevoLimiteEmp(){
      this.showTokenLimiteEmp = true;
      this.lmtCredito = this.obtenerLimiteEmp;
      this.editandoLimiteEmp = false;

      if(this.nuevoLimiteEditEmp) {
        console.log('this.nuevoLimiteEditEmp', this.nuevoLimiteEditEmp);
        //this.nuevoLimiteEditEmp.innerText = `${this.obtenerLimiteEmp}`;
        //Formatea el número con Decimal Pipe
        const formatNumber = this._decimalPipe.transform(this.obtenerLimiteEmp, '1.2-2');

        this.nuevoLimiteEditEmp.innerText = formatNumber; //Se lo asigna a la etiqueta

        const empleadoA = this.usuariosPorArea //Cambia el limite para el empleado area
        .flatMap((area:any) => area.area?.flatMap((a:any)=> a.empleadosArea))
        .find((row:any) => row.usuario === this.selectUser.usuario);
        if(empleadoA){
          empleadoA.limEmpleado = this.obtenerLimiteEmp;
          this.showEditarLimiteEmp = false;
          console.log("Cambio de limite",this.lmtCredito);
          //console.log(this.usuariosPorArea);
        }

        const empleadoS = this.usuariosPorArea
        .flatMap((area:any) => area.area?.flatMap((a:any) => a.subareas?.flatMap((s:any) => s.empleadosSub)))
        .find((row:any) => row.usuario === this.selectUser.usuario);
        if(empleadoS){
          empleadoS.limEmpleado = this.obtenerLimiteEmp;
          console.log("Cambio de limite usuario sub",this.lmtCredito);
        }
        this.modalComprobanteLimiteEmpleadoComponent.folioReferencia();
      }
    }
    mostrarExcederLimite(){
      //this.showTokenLimiteEmp = false;
      this.showExcedenteLimite = true;
    }
    cerrarExcederLimite(){
      console.log('Entre aqui');
      this.nuevoLimiteEmp = this.lmtCredito; //Vuelve a asignar el limite anterior
      this.editandoLimiteEmp = false;
      this.nuevoLimite = this.limiteInicial;
      console.log('this.nuevoLimiteEmp', this.nuevoLimiteEmp);
      console.log('this.editandoLimiteEmp', this.editandoLimiteEmp);
      console.log('this.nuevoLimite', this.nuevoLimite);

      if(this.nuevoLimiteEditEmp){
        //Formatea el número con Decimal Pipe
        const formatNumber = this._decimalPipe.transform(this.nuevoLimiteEmp, '1.2-2');

        this.nuevoLimiteEditEmp.innerText = formatNumber; //Se lo asigna a la etiqueta
        this.showExcedenteLimite = false;
      }else{
        this.showExcedenteLimite = false;
        this.areaLimiteCredito.limiteArea = this.limiteInicial;
        console.log('this.areaLimiteCredito.limiteArea', this.areaLimiteCredito.limiteArea);
        console.log("error");
      }

      if(this.nuevoLimiteEdit) {
        console.log('this.nuevoLimiteEdit', this.nuevoLimiteEdit);
        //Formatea el número con Decimal Pipe
        const formatNumber = this._decimalPipe.transform(this.nuevoLimite, '1.2-2');

        this.nuevoLimiteEdit.innerText = formatNumber; //Se lo asigna a la etiqueta
        
        this.showExcedenteLimite = false;
      }else{
        this.showExcedenteLimite = false;
        this.areaLimiteCredito.limiteArea = this.limiteInicial;
        console.log('this.areaLimiteCredito.limiteArea', this.areaLimiteCredito.limiteArea);
        console.log("error");
      }
    }
    /*
    guardarNuevoLimiteEmp() {
      this.lmtCredito = this.obtenerLimiteEmp;
      this.editandoLimiteEmp = false;

      if (this.nuevoLimiteEditEmp) {
        const formatNumber = this.decimalPipe.transform(this.obtenerLimiteEmp, '1.2-2');
        this.nuevoLimiteEditEmp.innerText = formatNumber;

        // Actualizar límite en usuariosPorArea
        this.usuariosPorArea = this.usuariosPorArea.map((row:any) => ({
          ...row,
          area: row.area.map((ar: any) => ({
            ...ar,
            empleadosArea: ar.empleadosArea.map((a: any) => ({
              ...a,
              limEmpleado: (a.idUsuario === this.selectUser.idUsuario) ? this.obtenerLimiteEmp : a.limEmpleado,
            })),
          })),
        }));
        this.showEditarLimiteEmp = false;
        console.log("Listo",this.usuariosPorArea);
      }
    }*/
    sendPostLimite():void {
      const empleadoA = this.usuariosPorArea //Cambia el limite para el empleado area
      .flatMap((area:any) => area.area?.flatMap((a:any)=> a.empleadosArea))
      .find((row:any) => row.usuario === this.selectUser.usuario);
      if(empleadoA){
        console.log("Empleado Area",this.selectUser.usuario);
        const postData =
        {
          cardNum:this.cardNum,
          idArea:this.obtidArea, //idArea
          idPadre:this.obtidSub, //idSubarea
          idEmpleado:this.select,
          limit:this.nuevoLimiteEditEmp.innerText = `${this.obtenerLimiteEmp}`,
          mock:0
        }
        this._editLimiteEmplService.postEditLimite(postData).subscribe((response:any) =>{
          //console.log(response);
          //console.log(postData);
          //console.log(this.nuevoLimiteEditEmp);
          //console.log(this.lmtCredito);

          if(response && response.message === 'OK'){
            this.showEditarLimiteEmp = false;
            this.guardarNuevoLimiteEmp();
            //this.showTokenLimiteEmp = false;
          }
          if(response && response.message === "Límite excedido") {
            console.log('this.nuevoLimiteEditEmp', this.nuevoLimiteEditEmp);
            this.showEditarLimiteEmp = false;
            this.mostrarExcederLimite();
            console.log("Limite excedido");
          }
        });
      }else{
        const empleadoS = this.usuariosPorArea
        .flatMap((area:any) => area.area?.flatMap((a:any) => a.subareas?.flatMap((s:any) => s.empleadosSub)))
        .find((row:any) => row.usuario === this.selectUser.usuario);
        if(empleadoS){
          console.log("Empleado Sub",this.selectUser.usuario);
          const postData =
        {
          cardNum:this.cardNum,
          idArea:this.obtidSub,     //idSubarea
          idPadre:this.obtidArea, //idArea
          idEmpleado:this.select,
          limit:this.nuevoLimiteEditEmp.innerText = `${this.obtenerLimiteEmp}`,
          mock:0
        }
        this._editLimiteEmplService.postEditLimite(postData).subscribe((response:any) =>{
          //console.log(response);
          //console.log(postData);
          //console.log(this.nuevoLimiteEditEmp);
          //console.log(this.lmtCredito);

          if(response && response.message === 'OK'){
            this.showEditarLimiteEmp = false;
            this.guardarNuevoLimiteEmp();
            console.log("Empleado Sub OK");
            //this.showTokenLimiteEmp = false;
          }
          if(response && response.message === "Límite excedido") {
            this.showEditarLimiteEmp = false;
            this.mostrarExcederLimite();
            console.log("Limite excedido EmplSub");
          }
        });
        }
      }
    }
    /*
    postyData(idUsuario: string) {
      const postData =
      {
        id: idUsuario,
        buc:'51663539'
      };
        this.empleadoTarjetaService.postData(postData).subscribe((response:any) => {
          //console.log(response);
          this.emplTrjArea = response;
          this.emplTrjArea = [
            {
              //cardRec:response.cardRec
              //Dinero disponible
              dineroDisponible: response.cardRec.cardInfo.acctRef.acctInfo.acctBal[0].curAmt,
              cardNum: response.cardRec.cardInfo.cardNum,
              //Limite de credito
              limiteCredito: response.cardRec.cardInfo.cardTrnLimit[0].curAmt,
              //Fecha limite de pago
              fechaLimite: response.fechaLimite,
              fechaCorte: response.fechaCorte,
              lineaAsignada: response.lineaAsignada,
              pagoMinimo: response.pagoMinimo
            }
          ];
              this.sendPostRequest();
              this.sendPostMovimientos(this.cardNum);

              //console.log(this.emplTrjArea);
              },
              error =>{
              console.error(error);
                if(error.error && error.error.errors){
                console.log("detalle", error.error.errors);
                }
                console.log('Mensaje',error.message);
              });
    }*/
    //***MODAL EDITAR */
    mostrarLimiteEmp(eventData:any):void{
      this.editandoLimiteEmp = false;
      this.showEditarLimiteEmp = true;
      this.obtenerLimiteEmp = eventData.nuevoLimite;
      this.nuevoLimiteEditEmp = eventData.limiteEditable;
      this.nuevoLimiteEditEmp.innerText = `${this.obtenerLimiteEmp}`;

      console.log("res", this.obtenerLimiteEmp);

    }
    closedLimiteEmp(){
      console.log('this.lmtCredito', this.lmtCredito);
      this.nuevoLimiteEmp = this.lmtCredito; //Vuelve a asignar el limite anterior
      this.editandoLimiteEmp = false;

      if(this.nuevoLimiteEditEmp){
        //Formatea el número con Decimal Pipe
        const formatNumber = this._decimalPipe.transform(this.nuevoLimiteEmp, '1.2-2');

        this.nuevoLimiteEditEmp.innerText = formatNumber; //Se lo asigna a la etiqueta
        this.cerrarLimite();
      }else{
        console.log("error");
      }
    }
    //***SUPERTOKEN - LIMITE EMPLEADO */
    showTokenLimiteEmp:boolean = false;
    showComprobanteLimiteEmp: boolean = false;
    tokenLimiteEmp(){
      //console.log("hola");
      this.sendPostLimite();

    }
    closedTokenEmp(){
      //console.log(this.limiteInicialEmp)
      const empleadoA = this.usuariosPorArea //Cambia el limite para el empleado area
      .flatMap((area:any) => area.area?.flatMap((a:any)=> a.empleadosArea))
      .find((row:any) => row.usuario === this.selectUser.usuario);
      if(empleadoA){
        console.log("Empleado AreaC",this.selectUser.usuario);
        const postData =
        {
          cardNum:this.cardNum,
          idArea:this.obtidArea, //idArea
          idPadre:this.obtidSub, //idSubarea
          idEmpleado:this.select,
          limit:this.limiteInicialEmp,
          mock:0
        }
        this._editLimiteEmplService.postEditLimite(postData).subscribe((response:any) =>{
          //console.log(response);
          console.log(postData);
          console.log(this.nuevoLimiteEditEmp);
          //console.log(this.lmtCredito);

            this.lmtCredito = this.limiteInicialEmp;
            this.editandoLimiteEmp = false;

            if(this.nuevoLimiteEditEmp){
              //this.nuevoLimiteEditEmp.innerText = `${this.obtenerLimiteEmp}`;
              //Formatea el número con Decimal Pipe
              const formatNumber = this._decimalPipe.transform(this.limiteInicialEmp, '1.2-2');

              this.nuevoLimiteEditEmp.innerText = formatNumber; //Se lo asigna a la etiqueta
              //Hace la reasigancion del valor inicial
              empleadoA.limEmpleado = this.limiteInicialEmp;
              this.showTokenLimiteEmp = false;
              //console.log("Reasignacion",this.lmtCredito);

            }
        });
      }
      const empleadoS = this.usuariosPorArea
      .flatMap((area:any) => area.area?.flatMap((a:any)=> a.subareas?.flatMap((sub:any)=> sub.empleadosSub)))
      .find((row:any) => row.usuario === this.selectUser.usuario);
      if(empleadoS){
        const postData =
        {
          cardNum:this.cardNum,
          idArea:this.obtidSub,     //idSubarea
          idPadre:this.obtidArea, //idArea
          idEmpleado:this.select,
          limit:this.limiteInicialEmp,
          mock:0
        }
        this._editLimiteEmplService.postEditLimite(postData).subscribe((response:any) =>{
          //console.log(response);
          //console.log(postData);
            this.lmtCredito = this.limiteInicialEmp;
            this.editandoLimiteEmp = false;

            if(this.nuevoLimiteEditEmp){
              //Formatea el número con Decimal Pipe
              const formatNumber = this._decimalPipe.transform(this.limiteInicialEmp, '1.2-2');

              this.nuevoLimiteEditEmp.innerText = formatNumber; //Se lo asigna a la etiqueta
              //Hace la reasignación del valor
              empleadoS.limEmpleado = this.limiteInicialEmp;
              this.showTokenLimiteEmp = false;
              //console.log("Reasignacion emplSub",this.lmtCredito);
            }
        });
      }
      //Limpia los inputs del token
    this.modalSupertokenLimiteEmpleadoComponent.limpiarInputs();
  }

    //***COMPROBANTE - LIMITE- EMPLEADO */
    comprobanteLimiteEmp(){
      this.showComprobanteLimiteEmp = true;
      this.showTokenLimiteEmp = false;
    }
    closedComprobanteEmp(){
      this.showComprobanteLimiteEmp = false;
    }

  actualizarPeriodo(event:any):void{
    const nuevoPeriodo = event.target.value;
    //console.log('Periodo seleccionado', nuevoPeriodo);
    switch(nuevoPeriodo){
      case 'actual':
        this.cargarMesActual();
        break;
      case 'anterior':
        this.cargarMesAnterior();
        break;
      case 'pasado':
        this.cargarMesPasado();
        break;

      default:
    }
    //this.updateMes();
  }
  actualizarMovimiento(event:any):void{
    const movimiento = event.target.value;
    switch(movimiento){
      case 'todo':
        this.mostrarTodo();
        break;
      case 'positivas':
        this.mostrarPositivas();
        break;
      case 'negativas':
        this.mostrarNegativas();
        break;
        default:
    }
  }
filtroPeriodo:string = 'actual';
filtroMovimiento: string = 'todo';
  //movimientosCont: number = 0;
  cargarMesActual(){
    this.currentMonth = new Date().getMonth();
    //this.updateMes();
    //this.selectButton = 'actual';
    this.filtroPeriodo = 'actual';
    //this.updateMes();

    //console.log('Mes Actual', this.currentMonth);
  }
  cargarMesAnterior(){
    const currentDate = new Date();
    let prev = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    this.currentMonth = prev -1;
    let prevY = currentYear;
    if(this.currentMonth <0){
      this.currentMonth =11;
      prevY -= 1;
    }
    //this.updateMes();
    //this.selectButton = 'anterior';
    this.filtroPeriodo = 'anterior';
    //this.updateMes();
  }
  cargarMesPasado(){
    const currentDate = new Date();
    let prev = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    this.currentMonth = prev - 2;
    let lastY = currentYear;

    if(this.currentMonth < 0){
      this.currentMonth += 12 ;
      lastY -= 1;
    }
    //this.updateMes();
    //this.selectButton = 'pasado';
    this.filtroPeriodo = 'pasado';
  }
  cargarMesSiguiente(){
    this.currentMonth ++;
    //this.updateMes();
    this.selectButton = 'siguiente';
  }
  filtroNegativas:boolean = false;
  mostrarNegativas(){
    this.filtroNegativas = true;
    this.filtroPositivas = false;
    //this.updateMes();
    //this.selectMovimiento = 'negativas'
    this.filtroMovimiento = 'negativas';
    this.container = true;
  }
  filtroPositivas:boolean = false;
  mostrarPositivas(){
    //console.log(this.filtrarMes);
    this.filtroNegativas = false;
    this.filtroPositivas = true;
    //this.updateMes();
    //this.selectMovimiento = 'positivas'
    this.filtroMovimiento = 'positivas';
    this.container = true;
    //console.log("Movimiento:",this.filtroMovimiento)

  }
  mostrarTodo(){
    this.filtroNegativas = false;
    this.filtroPositivas= false;
    //this.updateMes();
    //this.selectMovimiento = 'todo'
    this.filtroMovimiento = 'todo';
    this.container = true;
  }
  updateFiltro(){
    //this.selectButton = 'actual';
    //this.selectMovimiento = 'todo';
    this.filtroPeriodo = 'actual';
    this.filtroMovimiento = 'todo';
    this.currentMonth = new Date().getMonth();
    this.filtroNegativas = false;
    this.filtroPositivas= false;
    this.updateMes();
  }

  /**MOVIMIENTOS USUARIOS */
  mostrarFiltrado:boolean = false;
  mostrarCargarMas : boolean = false;
  mostrarMas : boolean = false;
  movimientosMostrados: any[] = [];
  movimientosShow:any[]=[];

  updateMes():void{
    let array = this.movimientosUser
    .filter((dia:any) =>{
    //console.log(dia); //Devuelve fechas
    const fechaString = dia.fecha + `T00:00:00.000Z`;
    const movimientoDate = new Date(fechaString);
    const isCurrentMonth = movimientoDate.getUTCMonth() === this.currentMonth;
    //console.log(movimientoDate);
    //console.log(movimientoDate.getMonth());
    if(isCurrentMonth){
      return dia;
    }
    });
    let totalMovimientos = array.reduce((total, dia)=> total + dia.movimientos.length, 0);
    //console.log(totalMovimientos);

    let contador = 0;
    let positivos = 0;
    let negativos = 0;

    this.filtrarMes = array.map(dia => {
      if(contador <10){
        this.movimientosShow = dia.movimientos;
      //console.log(this.filtroPositivas,this.filtroNegativas);
      if (this.filtroPositivas) {
          //dia.movimientos = dia.movimientos.filter((p:any) => Number(p.cantidad) > 0);
          this.movimientosShow = this.movimientosShow.filter((p:any) => Number(p.cantidad) >0);
          //this.movimientosShow = movimientosPositivos;
          positivos += this.movimientosShow.length;
          //console.log(positivos);
          //return {...dia,movimientos:dia.movimientos.filter((p:any) => Number(p.cantidad) > 0)}
      }
      if (this.filtroNegativas) {
        this.movimientosShow = this.movimientosShow.filter((p:any) => Number(p.cantidad) <0);
        //this.movimientosShow = movimientosNegativos;
        negativos += this.movimientosShow.length;
        //console.log(negativos);
        //return {...dia,movimientos:dia.movimientos.filter((p:any) => Number(p.cantidad) < 0)}
      }

      const movimientosRestantes = 10 - contador;
      this.movimientosMostrados = this.movimientosShow.slice(0, movimientosRestantes);

      contador += this.movimientosMostrados.length;

      return {...dia, movimientos: this.movimientosMostrados};


    }else{
      return {...dia, movimientos: []};
    }

  });
  if(this.filtroPositivas){
    this.mostrarCargarMas = positivos > 10;
  }else if(this.filtroNegativas){
    this.mostrarCargarMas = negativos > 10;
  }else{

// Actualizar totalMovimientosMostrados con la cantidad total de movimientos antes de aplicar los filtros.
  let totalMovimientosMostrados = Math.min(totalMovimientos, 10);
  this.mostrarCargarMas = totalMovimientos >  totalMovimientosMostrados;
  //console.log(totalMov);
  //console.log(totalMovimientosMostrados);
  //console.log(this.mostrarCargarMas);
  const rangoFecha = this.filtrarMes.map(item => item.fecha);

  this.periodoInicial = rangoFecha[0];
  this.periodoFinal = rangoFecha[rangoFecha.length -1];
  //console.log(this.periodoFecha); //Periodo fecha inicial y final

    this.container = contador > 0;
  }

  }


// Este método se llama al hacer clic en el botón para mostrar todos los movimientos restantes
cargarMas(): void {

  // Filtra los movimientos del usuario para el mes actual
  let array = this.movimientosUser
    .filter((dia: any) => {
      const fechaString = dia.fecha + `T00:00:00.000Z`;
      const movimientoDate = new Date(fechaString);
      const isCurrentMonth = movimientoDate.getUTCMonth() === this.currentMonth;
      //console.log(movimientoDate);
      if(isCurrentMonth){
        return dia;
      }
    });
  // Reinicia el contador de movimientos mostrados
  let totalMovimientos = 0;

  // Itera sobre los movimientos del mes
  this.filtrarMes = array.map(dia => {
    let movimientosToShow = dia.movimientos;

    // Aplica los filtros positivos y negativos según sea necesario
    if (this.filtroPositivas) {
      movimientosToShow = movimientosToShow.filter((p: any) => Number(p.cantidad) > 0);

    }

    if (this.filtroNegativas) {
      movimientosToShow = movimientosToShow.filter((p: any) => Number(p.cantidad) < 0);
    }

    // Obtiene todos los movimientos sin limitaciones
    const movimientosMostrados = movimientosToShow;

    // Actualiza el contador de movimientos mostrados
    totalMovimientos += movimientosMostrados.length;

    // Retorna el objeto día con los movimientos a mostrar
    return { ...dia, movimientos: movimientosMostrados };
  });

  // Verifica si se han mostrado al menos 1 movimiento para mostrar la sección
  this.container = totalMovimientos > 0;
  //Actualiza los movimientos y define si hay más por mostrar
  this.mostrarCargarMas = totalMovimientos > this.filtrarMes.reduce((total,dia)=> total + dia.movimientos.length, 0);
  //console.log(this.mostrarCargarMas);
  //console.log(totalMovimientos);

}
  container:boolean = false;
/*
  showMovimientos(dia:any):boolean{
    if (this.filtroPositivas) {
      //dia.movimientos = dia.movimientos.filter((p:any) => Number(p.cantidad) > 0);
      return {...dia,movimientos:dia.movimientos.filter((p:any) => Number(p.cantidad) > 0)}

  }
  if (this.filtroNegativas) {
      return {...dia,movimientos:dia.movimientos.filter((p:any) => Number(p.cantidad) < 0)}
  }
    return true;
  }*/


  /**APARTADO DE MOVIMIENTOS USUARIOS FECHAS*/
  compararFechas(fecha:any){
    const today = new Date(); //Crea una instancia de la fecha actual y se almacena en today
    const options: Intl.DateTimeFormatOptions = {month: 'long', day: 'numeric'}; //objeto : especifica como se formateara la fecha (Mes-dia)
    const todayDate = today.toLocaleDateString('es-MX',options); //Formatea la fecha actual con el formato especificado en options

    const fechaMovimientoFormatted = new Date(fecha).toLocaleDateString('es-MX',options); //se toma el parametro fecha y lo convierte en tipo Date
                                                                                          //(formatea ese objeto de fecha en una cadena de texto con
                                                                                          //el formato de la fecha actual )
    return fechaMovimientoFormatted.trim() === todayDate.trim(); //Compara las dos cadenas de texto formateadas, quita los espacios en blanco
                                                                  //Devuelve un true o false
  }
/**MODAL USUARIO */
  exportMovimientos():void{
    this.muestraModal = true; //Abre modal comprobante
  }
  closeModal() {
    this.muestraModal = false;
  }

  /**MODAL ÁREA */
  exportModalArea():void{
    this.muestraModalArea=true;
  }
  closeModalArea() {
    this.muestraModalArea = false;
  }
  /**MODAL SUBÁREA */
  exportModalSubArea():void{
    this.showModalSubArea = true;
  }
  closeModalSubArea(){
    this.showModalSubArea = false;
  }
  /*
  getUserArea(nombreArea:string){
    const areaSeleccionada = this.areas.find(area => area.area === nombreArea);

    if (areaSeleccionada) {
      const usuariosDelArea = this.usuarios.filter(usuario => usuario.idArea === areaSeleccionada.idArea);
      return { area: nombreArea, usuarios: usuariosDelArea };
    } else {
      return null;
    }
  }*/



  mostrarDiv:boolean = true;


  cantidadMovi: number = 10;
  toogleDiv(Value:boolean){
    this.mostrarDiv = Value;
  }
/*
  cargarMasAreas():void{
    this.masAreas = true;
    this.muestraAreas = false;
  }
  ocultarAreas():void{
    this.masAreas= !this.masAreas;
    if(!this.masAreas){
      this.muestraAreas = true
    }
  }*/
  cargarMasUsuarios():void{
    this.masUsers = true;
    this.muestraUsuarios = false;
    this.cantidadMovi +=10;
  }
  ocultarUsuarios():void{
    this.masUsers= !this.masUsers;
    if(!this.masUsers){
      this.muestraUsuarios = true
    }
  }

  cargarMasMovimientos():void{
    this.masMovi = true;
    this.muestraMovimientos = false;
  }
  ocultarMovimientos():void{
    this.masMovi= !this.masMovi;
    if(!this.masMovi){
      this.muestraMovimientos = true
    }
  }
//USUARIOS SUB AREA
  cargarMovimientos():void{
    this.moreMovi = true;
    this.masMovimientos = false;
  }
  ocultaMovimientos():void{
    this.moreMovi= !this.moreMovi;
    if(!this.moreMovi){
      this.masMovimientos = true
    }
  }

  mostrar = 10; //MostrarAreas
  cargarAreas(){
    this.mostrar = this.usuariosPorArea.length
  }
showSubareas:boolean=false;
  busqueda(obtener:any):void{
    this.select = null;
    this.getUserArea();
    this.mostrar = 3;
    this.showEmpleadosSub = false;
    this.showUserSub = false;
    this.movimientosUserSubarea = false;
    this.mostrarDatos = false;
    this.mostrarDiv=false;
    this.datosareas = true;
    this.showSubareas = true;
    this.datosUsuarios = true;
    this.datosnumero = true;
    this.mostrar_notarjeta = false;

    this.mostrar_area_user = false;
    this.mostrarInfo_por_area = false;
    this.limiteCredito_area = false;
    this.mostrarInfo_por_usuario = false;
    this.mostrarLimiteUsuario = false;
    this.mostrarMovimientosUsuario= false;
    this.showLimiteCreditoSub = false;
    this.showLimiteCredito = false;

    this.modelarea = obtener;
    this.modelsub = obtener;
    this.model = obtener;
    this.modelnotarjeta = obtener;
    const numberString = this.modelnotarjeta.toString();
    //console.log(this.posts);
    if(this.modelarea.trim() === ''){
      this.filtroarea = [];
      this.mostrarDatos = true;
      this.mostrarDiv=true;
    }else{

      const usuariosArea = this.usuariosPorArea
      .flatMap((a:any)=> a.area)
      .filter((area:any) =>
        area.nombreArea.toLowerCase().includes(this.model.toLowerCase())
      )
      .map((ar:any) => ({
          area: ar.nombreArea,
          limite: ar.limiteArea
          //linea_asignada: tarjeta ? tarjeta.linea_asignada : 'Usuario no encontrado'
      }));
      this.filtroarea = usuariosArea;
    }
    if(this.model.trim() === ''){
      this.filtro = [];
    }else{

      const usuariosArea = this.usuariosPorArea
      .flatMap((a:any)=> a.area)
      .flatMap((area:any)=> area.empleadosArea)
      .filter((usuario:any) =>
        usuario.usuario.toLowerCase().includes(this.model.toLowerCase())
      )
      .map((usuario:any) => ({
          idUsuario: usuario.idUsuario,
          usuario: usuario.usuario,
          puesto: usuario.puesto,
          linea_asignada: usuario.limEmpleado
          //linea_asignada: tarjeta ? tarjeta.linea_asignada : 'Usuario no encontrado'
      }));
      const usuariosSubArea = this.usuariosPorArea
      .flatMap((a:any)=> a.area)
      .flatMap((area:any)=> area.subareas)
      .flatMap((subarea:any) => subarea.empleadosSub)
      .filter((usuario:any) =>
        usuario.usuario.toLowerCase().includes(this.model.toLowerCase())
      )
      .map((usuario:any) => ({
          idUsuario: usuario.idUsuarioSub,
          usuario: usuario.usuario,
          puesto: usuario.puesto,
          linea_asignada: usuario.limEmpleado
          //linea_asignada: tarjeta ? tarjeta.linea_asignada : 'Usuario no encontrado'
      }));
      this.filtro = [...usuariosArea, ...usuariosSubArea]

    }if (this.modelnotarjeta == 0 ) {
      this.filtronumero = [];
    } else {
      //const numeroTarjetaCopia = [...this.numeroTarjeta];
      //const numeroUsuarioSubCopia = [...this.numeroUsuarioSub];
      const usuariosArea = this.usuariosPorArea
        .flatMap((a:any)=> a.area)
        .map((numero: any) => numero.empleadosArea)
        .flat()
        .filter((usuario: any) =>
          usuario.ultimoDig && usuario.ultimoDig.toString().startsWith(numberString)
        )
        .map((u: any) => ({
          numero: u.ultimoDig,
          usuario: u ? u.usuario : 'Usuario no encontrado Area'
        }));

      const usuariosSubArea = this.usuariosPorArea
        .flatMap((a:any)=> a.area)
        .flatMap((area: any) => area.subareas)
        .flatMap((subarea: any) => subarea.empleadosSub)
        .filter((usuario: any) =>
          //console.log('Usuario Sub', usuario);
          usuario.ultimoDig && usuario.ultimoDig.toString().startsWith(numberString)
        )
        .map((u: any) => ({
          numero: u.ultimoDig,
          usuario: u ? u.usuario : 'Usuario no encontrado Subárea'
        }));
        //console.log('Usuario Sub', usuariosSubArea);

      this.filtronumero = [...usuariosArea, ...usuariosSubArea];
      //console.log('filtro', this.filtronumero);
        //console.log(this.filtronumero);
    }
    if(this.modelsub.trim() === ''){
      this.filtroSubarea = [];
    }else{
      this.filtroSubarea = this.usuariosPorArea
      .flatMap((a:any)=> a.area)
      .flatMap((area:any)=> area.subareas) //obtiene todas las subareas
      .filter((subarea:any)=> subarea.subarea.toLowerCase().includes(this.modelsub.trim().toLowerCase())) //filtra subareas letra por letra
      .map((subarea:any) =>({ //mapea subareas
        subarea:subarea.subarea,
        limiteSub: subarea.limiteSub
      }))

      //console.log(this.modelsub)
      //console.log(this.filtroSubarea);
    }

  }



/**TARJETAS ADICIONALES */
tarjetasAdicionales(){
  this.showTarjetasAdicionales = true;
  //this.mostrarInfo_por_area = false;
}

}


