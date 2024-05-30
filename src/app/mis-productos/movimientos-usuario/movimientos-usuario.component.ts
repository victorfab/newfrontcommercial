import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-movimientos-usuario',
  templateUrl: './movimientos-usuario.component.html',
  styleUrls: ['./movimientos-usuario.component.css'],
  providers:[NgModel]
})
export class MovimientosUsuarioComponent {

@Input() visibilityMovimientosUser:boolean = false;
//@Input() ultimosMovimientos:Array<any> = [];
@Input() visibilityMovimientos:boolean = true;
@Input() moreMovimientos:boolean = false;
@Output() masMovimientos = new EventEmitter<void>();
@Output() menosMovimientos = new EventEmitter<void>();
//@Input() todayDat: any = null;
//@Input() movimientosA:any = null;
@Input() mostrarFiltrado :boolean = false;

  negativeAmount(cantidad : number) : boolean {
    return cantidad < 0;
  }

  positiveAmount(cantidad : number) : boolean {
    return cantidad >= 0;
  }

  getSign(cantidad : number) : string {
    return cantidad < 0 ? '-' : '+';
  }

  getTransformed(cantidad : number) : string {
    return Math.abs(cantidad).toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
  }

  negativeAmountTest(cantidad : number) : boolean {
    return this.negativeAmount(cantidad);
  }

  positiveAmountTest(cantidad : number) : boolean {
    return this.positiveAmount(cantidad);
  }

  getSignTest(cantidad : number) : string {
    return this.getSign(cantidad);
  }

  getTransformedTest(cantidad : number) : string {
    return this.getTransformed(cantidad);
  }

@Output() mesActual = new EventEmitter<void>();
@Output() mesSiguiente = new EventEmitter<void>();
@Output() mesAnterior = new EventEmitter<void>();
@Output() mesPasado = new EventEmitter<void>();
@Output() mesGastos = new EventEmitter<void>();
@Output() mesIngresos = new EventEmitter<void>();
@Output() mesTodo = new EventEmitter<void>();
@Output() aplicarFiltro = new EventEmitter<any>();
@Output() quitarFiltro = new EventEmitter<void>();
//@Input() visible:boolean = false;
//@Input() filtroPositivo:boolean = false;
//@Input() filtroNegativo:boolean = false;
//@Output() nuevoMes = new EventEmitter<number>();
@Input() movimientosUsuarioMes: Array<any> = [];
@Input() filtroBoton: string = '';
@Input() filtroMovimento:string = '';
//@Input() mesActual: any = null;

//onNuevoMes(carga: number){
 // this.nuevoMes.emit(carga);
//}
@Input() filtroPeriodo:string = '';
@Output() actualizarPeriodo = new EventEmitter<any>();
@Output() actualizarMovimiento = new EventEmitter<any>();
@Input() movimientosUser: Array<any> = [];
@Input() filtroMovimiento:string ='';

@Output() cargarMas = new EventEmitter<any>();
@Output() movimientosRestantes = new EventEmitter<boolean>();

@Input() mostrarCargarMas:boolean = false;
@Input()   mostrarMas : boolean = false;

}
