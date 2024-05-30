import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-usuarios-area',
  templateUrl: './usuarios-area.component.html',
  styleUrls: ['./usuarios-area.component.css']
})
export class UsuariosAreaComponent {
@Input() visibilityUserArea:boolean = false;
@Input() selectArea:any = null;
@Input() selectUserArea:any = [];
@Input() subareaDeArea: any = null;
@Input() usuariosSubArea:any =[];
@Input() totalEmpleados: any = {};
@Output() infoUser = new EventEmitter<string>();
@Output() infoClick = new EventEmitter<string>();
@Output() infoSubarea= new EventEmitter<any>();


showSubArea:boolean = false;
iconRotation:boolean = false;
showEmpleados:boolean = false;
showEmpleadosArea:boolean = false;
public page!:number; //Numero de paginas


rotation(selectArea:any){
  selectArea.showSubArea = !selectArea.showSubArea;
  selectArea.iconRotation = !selectArea.iconRotation;
  selectArea.showEmpleadosArea = !selectArea.showEmpleadosArea;

}
rotationSub(subarea:any){
  subarea.showEmpleados = !subarea.showEmpleados;
  subarea.iconRotation = !subarea.iconRotation;
}
}
