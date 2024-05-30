import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepDireccionesEntregaComponent } from './step-direcciones-entrega.component';

const routes: Routes = [
  { path: '', component: StepDireccionesEntregaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepDireccionesEntregaRoutingModule { }
