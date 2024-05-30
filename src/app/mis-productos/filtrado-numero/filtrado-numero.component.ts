import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filtrado-numero',
  templateUrl: './filtrado-numero.component.html',
  styleUrls: ['./filtrado-numero.component.css']
})
export class FiltradoNumeroComponent {
@Input() numero:Array<any> = [];
@Input() datosNumero:boolean = false;
@Input() select:any;
@Output() numeroClick = new EventEmitter<number>();
@Output() infoUser = new EventEmitter<void>();

}
