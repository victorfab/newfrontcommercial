import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { StepDireccionesEntregaComponent } from './step-direcciones-entrega.component';
import { StepDireccionesEntregaRoutingModule } from './step-direcciones-entrega-routing.module';
import { DireccionComponent } from './direccion/direccion.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StepDireccionesEntregaComponent,
    DireccionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StepDireccionesEntregaRoutingModule,
    SharedModule
  ]
})
export class StepDireccionesEntregaModule { }
