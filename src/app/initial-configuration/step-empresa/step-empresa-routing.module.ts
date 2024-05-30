import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepEmpresaComponent } from './step-empresa.component';

const routes: Routes = [
  { path: '', component: StepEmpresaComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepEmpresaRoutingModule { }
