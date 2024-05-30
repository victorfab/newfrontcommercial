import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-editar-limite-subarea',
  templateUrl: './modal-editar-limite-subarea.component.html',
  styleUrls: ['./modal-editar-limite-subarea.component.css']
})
export class ModalEditarLimiteSubareaComponent {
  @Input() creditoSub:any =null;
  @Input() showEditarLimiteSub:boolean = false;
  @Input() obtenerLimiteSub:any;
  @Input() limiteInicialSub:any;
  @Output() closedLimiteSub = new EventEmitter<any>();
  @Output() guardarNuevoLimiteSub = new EventEmitter<any>(); //Guarda el nuevo limite
  @Output() tokenLimiteSubArea = new EventEmitter<any>();

}
