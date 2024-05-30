import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-eliminar-usuario',
  templateUrl: './modal-eliminar-usuario.component.html',
  styleUrls: ['./modal-eliminar-usuario.component.css']
})
export class ModalEliminarUsuarioComponent {
@Input() showDeleteUser:boolean = false;
@Output() closedEliminarUsuario = new EventEmitter<any>();
@Output() afirmarEliminar = new EventEmitter<any>();
}
