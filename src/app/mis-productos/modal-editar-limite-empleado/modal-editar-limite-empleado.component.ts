import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-editar-limite-empleado',
  templateUrl: './modal-editar-limite-empleado.component.html',
  styleUrls: ['./modal-editar-limite-empleado.component.css']
})
export class ModalEditarLimiteEmpleadoComponent {
@Input() limiteCreditoUser:any =null;
@Input() limiteInicialEmp:number []=[];
@Input() lmtCredito:any;
@Input()  selectUser:any = null;
@Input() showEditarLimiteEmp:boolean = false;
@Input() obtenerLimiteEmp:any;
@Output() closedLimiteEmp = new EventEmitter<any>();
@Output() guardarNuevoLimiteEmp = new EventEmitter<any>(); //Guarda el nuevo limite
@Output() tokenLimiteEmp = new EventEmitter<any>();

}
