import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filtrado-usuarios',
  templateUrl: './filtrado-usuarios.component.html',
  styleUrls: ['./filtrado-usuarios.component.css']
})
export class FiltradoUsuariosComponent {
@Input() usuarios:Array<any> = []
@Input() dataUser:boolean = false;
//@Output() contInfo = new EventEmitter<string>();

@Output() infoUser = new EventEmitter<string>();
@Output() numeroClick = new EventEmitter<number>();

@Input() selectUser:any = null;
@Input() select:any;
}
