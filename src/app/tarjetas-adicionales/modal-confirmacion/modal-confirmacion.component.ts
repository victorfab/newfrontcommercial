import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-confirmacion',
  templateUrl: './modal-confirmacion.component.html',
  styleUrls: ['./modal-confirmacion.component.css']
})
export class ModalConfirmacionComponent {
@Input() showConfirmacion:boolean = false;
@Input() confirmarId: any;
@Output() closedConfirmar = new EventEmitter<any>();
@Output() confirmarTarjeta = new EventEmitter<any>();
}
