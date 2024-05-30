import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rastreo-envio',
  templateUrl: './rastreo-envio.component.html',
  styleUrls: ['./rastreo-envio.component.css']
})
export class RastreoEnvioComponent {
@Input() showRastreoEnvio:boolean = false;
@Input() obtenerStatus:any =null;
@Output() solicitarTarjetas = new EventEmitter<any>();
@Output() regresar= new EventEmitter<any>();
@Output() eliminarRastreo = new EventEmitter<any>();
@Input() muestraStatus:boolean = false;
@Input() muestraStatusEnRuta:boolean = false;
@Input() muestraStatusEntregadas:boolean = false;
@Input() muestraStatusNoRecibido:boolean=false;
}
