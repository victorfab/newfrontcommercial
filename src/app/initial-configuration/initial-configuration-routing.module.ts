import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InitialConfigurationComponent } from './initial-configuration.component';

const routes: Routes = [
  { path: 'initial-configuration', component: InitialConfigurationComponent, children: [
    { path: 'company-structure', loadChildren: () => import('./step-empresa/step-empresa.module').then(m => m.StepEmpresaModule) },
    { path: 'delivery-addressess', loadChildren: () => import('./step-direcciones-entrega/step-direcciones-entrega.module').then(m => m.StepDireccionesEntregaModule) },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InitialConfigurationRoutingModule { }
