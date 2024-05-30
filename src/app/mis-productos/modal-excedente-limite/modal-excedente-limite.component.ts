import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-excedente-limite',
  templateUrl: './modal-excedente-limite.component.html',
  styleUrls: ['./modal-excedente-limite.component.css']
})
export class ModalExcedenteLimiteComponent {
@Input() showExcederLimite: boolean = false;
@Output() mostrarExcederLimite = new EventEmitter<void>();
@Output() cerrarExcederLimite = new EventEmitter<void>();
}
