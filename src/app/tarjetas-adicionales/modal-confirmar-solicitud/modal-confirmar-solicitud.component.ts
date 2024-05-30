import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatosUsuarioService } from '../services/datos-usuario.service';

@Component({
  selector: 'app-modal-confirmar-solicitud',
  templateUrl: './modal-confirmar-solicitud.component.html',
  styleUrls: ['./modal-confirmar-solicitud.component.css']
})
export class ModalConfirmarSolicitudComponent {
  /*
  datosUsuariosSeleccionados: any[]=[];
  constructor(
    private datosUsuarioService: DatosUsuarioService
  ){
    this.datosUsuariosSeleccionados = this.datosUsuarioService.datosUsuariosSeleccionados;
    //console.log(this.datosUsuariosSeleccionados);
  }*/
@Input() showConfirmarSolicitud:boolean = false;
@Output() closeConfirmarSolicitud = new EventEmitter<void>();
@Output() solicitarToken = new EventEmitter<void>();
@Input() usuariosSelecionados:number[]=[];
@Input() totalUserSelect: number = 0;
@Input() infoUsuariosSelect: any[]=[]
}
