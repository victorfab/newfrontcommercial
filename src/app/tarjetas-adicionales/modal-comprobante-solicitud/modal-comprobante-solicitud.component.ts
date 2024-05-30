import { Component, EventEmitter, INJECTOR, Input, Output } from '@angular/core';
import { DatosUsuarioService } from '../services/datos-usuario.service';

@Component({
  selector: 'app-modal-comprobante-solicitud',
  templateUrl: './modal-comprobante-solicitud.component.html',
  styleUrls: ['./modal-comprobante-solicitud.component.css']
})
export class ModalComprobanteSolicitudComponent {
  /*
  datosUsuariosSeleccionados: any[]=[];
  constructor(
    private datosUsuarioService: DatosUsuarioService
  ){
    this.datosUsuariosSeleccionados = this.datosUsuarioService.datosUsuariosSeleccionados;
    console.log(this.datosUsuariosSeleccionados);
  }*/
@Input() showComprobante:boolean = false;
@Output() infoComprobante = new EventEmitter<{totalUserSelect:number, fecha:string, datosUsuariosSeleccionados:any[]}>();
//@Input() passwordConfirm:boolean = false;
@Input() totalUserSelect: number = 0;
@Input() datosUsuariosSeleccionados:any[]=[];
//@Input() infoUsuariosSelect:any[]=[];
@Input() fecha:string ='';


exportarCSV() {
  const csvRows = [
    ['Solicitaste con exito', `${this.totalUserSelect}tarjeta(s) de crédito`],
    ['Fecha y hora de operación', `${this.fecha}`],
    ['Folio', `Z1234567`],
    ['Tipo de producto', `Tarjetas de crédito`]
    //
  ];

  const csvContent = csvRows.map(row => row.join(',')).join('\n');
  const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'datos.csv');
  document.body.appendChild(link);
  link.click();
}

}
