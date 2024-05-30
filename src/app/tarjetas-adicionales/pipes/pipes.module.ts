import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FechaTarjetasPipe } from './fecha-movimientos.pipe';



@NgModule({
  declarations: [
    FechaTarjetasPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FechaTarjetasPipe
  ]
})
export class PipesFechaModule { }
