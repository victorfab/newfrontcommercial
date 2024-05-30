import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Empleado } from 'src/app/models/empleado.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-solicitar-tarjetas',
  templateUrl: './solicitar-tarjetas.component.html',
  styleUrls: ['./solicitar-tarjetas.component.css']
})
export class SolicitarTarjetasComponent {
  @Input() showTarjetasAdicionales:boolean = false;
  @Input() registrarUsuarios:boolean = false;
  @Output() muestraModal= new EventEmitter<any>();
  @Output() modalAddEmpleado = new EventEmitter<any>();
  @Output() muestraAsignadas = new EventEmitter<any>();
  @Output() addEmpleados = new EventEmitter<any>();
  @Output() infoComprobante = new EventEmitter<any>();
  @Output() showEliminarTarjetas = new EventEmitter<any>();
  @Input() totalEmpleados: number = 0;
  @Input() empresadata: any = [];

  fileArr = [];
  imgArr: any = [];
  fileObj = [];
  msg!: string;
  progress: number = 0;
  filebase64!: any;
  listusrerror: Array<Empleado> = [];
  modalLoading: boolean = false;
  modalErrorLoading: boolean = false;

  constructor(private fileUploadService : FileUploadService,
              private sanitizer: DomSanitizer,
              private router: Router
               ) {}

  descargarArchivo():void{
    //Ruta del archivo excel
    const rutaArchivo = '../../../assets/media/Layout Cargas .xlsx'
    //Obtener id de la etiqueta
    const enlace = document.getElementById('tuEnlace');
    //Verificar si el enlace existe
    if(enlace){
      //Establecer la URL del archivo en el enlace existente
      enlace.setAttribute('href', rutaArchivo);

      //Agregar el atributo download para especificar el nombre del archivo a descargar
      enlace.setAttribute('download','Layout descargas.xlsx');

      //Simula rl clic en el enlace existente para iniciar la descarga
      enlace.click();
    }else{
      //Si la etiqueta <a></a> no existe mandar mensaje
      console.log('No se encontro el enlace existente');
    }
  }

  upload(e: any) {

    console.log(this.empresadata);
    
    const file = e.target.files[0];
    const reader = new FileReader();
    this.filebase64;
    reader.readAsDataURL(file);
    reader.onload = () => {
        this.modalLoading = true;
        this.filebase64 = reader.result;
        console.log(this.filebase64);
        this.sendfile();
    };

  }
  // Clean Url
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  sendfile() {

    const data = {
      "idEmpresa": this.empresadata[0].empresa.idArea,
      "cardNum": this.empresadata[0].lmwl.data.cardRec[0].cardInfo.cardNum,
      "buc": this.empresadata[0].empresa.buc,
      "base64": this.filebase64
    };

    this.fileUploadService.upload( data )
        .subscribe( (resp: any ) => {
          console.log(resp);
          this.modalLoading = false;
          this.listusrerror = resp.listEmpleadoError;
          console.log(this.listusrerror);

          if( this.listusrerror!.length > 0 ) {

            this.modalErrorLoading = true;

          }

        });

  }

  getErrors() {

/*     this.listusrerror.forEach( (errs:any ) => {
      
      return errs[0].map( {
        'Linea' : errs.numRow,
        'error' : errs.valido
      });

    }); */

  }

  redirectListEmp() {
    this.router.navigate(['/archivo-cargado']);
  }

  closedModal() {
    this.modalErrorLoading = false;
  }

/*   uploadFile(event : any) : void {
    

    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result);
    };
    

  } */

}
