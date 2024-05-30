import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatosUsuarioService } from '../services/datos-usuario.service';
import { NomStatusService } from '../services/nom-status.service';

@Component({
  selector: 'app-tarjetas-asignadas',
  templateUrl: './tarjetas-asignadas.component.html',
  styleUrls: ['./tarjetas-asignadas.component.css']
})
export class TarjetasAsignadasComponent {
@Input() datosUsuariosSeleccionados: any[]=[];
@Input() showTarjetasAsignadas:boolean = false;
//@Input() getTarjetas:Array<any>=[];
@Input() getEnvios:Array<any>=[];
@Input() getEntregadas:Array<any>=[];
@Input() totalSeleccionados: number = 0;
@Output() solicitarTarjetas = new EventEmitter<any>();
@Output() eliminarTarjetas = new EventEmitter<any>();
@Output() observarStatus = new EventEmitter<any>();
@Output() showEliminarTarjetas = new EventEmitter<any>();
@Output() showConfirmarTarjetas = new EventEmitter<any>();
@Input() totalEmpleados!: number;



showStatus:boolean = false;
showStatusEntregadas:boolean = false;
showStatusEnvio:boolean = false;
iconRotation:boolean = false;
iconRotationEntregadas:boolean = false;
iconRotationEnvio:boolean = false;

rotation():void{
  this.showStatus = !this.showStatus;
  this.iconRotation = !this.iconRotation;
}
rotationEntregadas():void{
  this.showStatusEntregadas = !this.showStatusEntregadas;
  this.iconRotationEntregadas = !this.iconRotationEntregadas;
}
rotationEnvio():void{
  this.showStatusEnvio = !this.showStatusEnvio;
  this.iconRotationEnvio = !this.iconRotationEnvio;
}
}
