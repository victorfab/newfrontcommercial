import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-eliminar-solicitadas',
  templateUrl: './modal-eliminar-solicitadas.component.html',
  styleUrls: ['./modal-eliminar-solicitadas.component.css']
})
export class ModalEliminarSolicitadasComponent {
@Input() showEliminar: boolean = false;
@Output() closedEliminar = new EventEmitter <any>();
@Output() confirmarEliminar = new EventEmitter<any>();
}
