import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-cancelar-proceso',
  templateUrl: './modal-cancelar-proceso.component.html',
  styleUrls: ['./modal-cancelar-proceso.component.css']
})
export class ModalCancelarProcesoComponent {
@Input() showCancelarProceso:boolean = false;
@Output() closeCancelarProceso = new EventEmitter<any>()
@Output() cancelarProceso = new EventEmitter<any>();
}
