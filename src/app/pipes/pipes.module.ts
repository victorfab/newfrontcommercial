import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FechaMovimientosPipe } from './fecha-movimientos.pipe';
import { TransformWordPipe } from './transform-word.pipe';
import { TransformFechaPipe } from './transform-fecha.pipe';
import { FechaPeriodoPipe } from './fecha-periodo.pipe';
import { FechaFolioPipe } from './fecha-folio.pipe';
import { FechaMovPdfPipe } from './fecha-mov-pdf.pipe';



@NgModule({
  declarations: [
    FechaMovimientosPipe,
    TransformWordPipe,
    TransformFechaPipe,
    FechaPeriodoPipe,
    FechaFolioPipe,
    FechaMovPdfPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FechaMovimientosPipe,
    TransformWordPipe,
    TransformFechaPipe,
    FechaPeriodoPipe,
    FechaFolioPipe
  ]
})
export class PipesModule { }
