import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-usuario-eliminado',
  templateUrl: './modal-usuario-eliminado.component.html',
  styleUrls: ['./modal-usuario-eliminado.component.css']
})
export class ModalUsuarioEliminadoComponent {
@Input() showUsuarioEliminado:boolean = false;
@Output() closedUsuarioEliminado = new EventEmitter<any>();
@Input() userEliminado: any;
}
