import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filtrado-area',
  templateUrl: './filtrado-area.component.html',
  styleUrls: ['./filtrado-area.component.css']
})
export class FiltradoAreaComponent {

  @Input() area:Array<any> = [];
  @Input() select:any;
  @Input() datos:boolean = false;
  @Output() areaClick = new EventEmitter<string>();
  @Output() infoClick = new EventEmitter<string>();
}
