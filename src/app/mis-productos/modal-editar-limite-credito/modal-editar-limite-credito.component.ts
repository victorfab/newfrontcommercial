import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-editar-limite-credito',
  templateUrl: './modal-editar-limite-credito.component.html',
  styleUrls: ['./modal-editar-limite-credito.component.css']
})
export class ModalEditarLimiteCreditoComponent {
@Input() limitCreditoArea:any =null;
@Input() showEditarLimite:boolean = false;
@Input() obtenerLimite:any;
@Input() limiteInicial:any;
@Output() closedLimite = new EventEmitter<any>();
@Output() guardarNuevoLimite = new EventEmitter<any>(); //Guarda el nuevo limite
//@Output() nuevoLimiteArea = new EventEmitter<any>();
@Output() tokenLimiteArea = new EventEmitter<any>();


}
