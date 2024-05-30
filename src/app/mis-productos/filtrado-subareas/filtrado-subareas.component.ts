import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filtrado-subareas',
  templateUrl: './filtrado-subareas.component.html',
  styleUrls: ['./filtrado-subareas.component.css']
})
export class FiltradoSubareasComponent {
@Input() filtroSubarea:Array<any>=[];
@Input() select:any;
@Input() showSubareas:boolean = false;
@Output() infoSubarea= new EventEmitter<any>();
}
