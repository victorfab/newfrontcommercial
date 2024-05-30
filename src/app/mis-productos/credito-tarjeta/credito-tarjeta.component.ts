import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-credito-tarjeta',
  templateUrl: './credito-tarjeta.component.html',
  styleUrls: ['./credito-tarjeta.component.css']
})
export class CreditoTarjetaComponent {
@Input() visibilityTarjeta:boolean = false;
@Input() selectNumero:any = null;
}
