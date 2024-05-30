import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EstructuraService } from "src/app/services/estructura.service";
import { InitialConfigurationComponent } from "./initial-configuration.component";
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
/* import { DireccionesService } from "src/app/services/direcciones.service"; */
import { StepEmpresaModule } from './step-empresa/step-empresa.module';
import { StepperModule } from '../shared/atoms/stepper/stepper.module';
import { AppRoutingModule } from '../app-routing.module';
//import { ActionDropdownMenuModule } from '../shared/atoms/action-dropdown-menu/action-dropdown-menu.module';
import { StepEmpresaComponent } from './step-empresa/step-empresa.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { InitialConfigurationRoutingModule } from './initial-configuration-routing.module';
import { StepDireccionesEntregaComponent } from './step-direcciones-entrega/step-direcciones-entrega.component';
import { DireccionesService } from '../services/direcciones.service';


@NgModule({
  declarations: [
    InitialConfigurationComponent,
    StepEmpresaComponent
  ],
  providers: [
    EstructuraService,
    DireccionesService
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatExpansionModule,
    InitialConfigurationRoutingModule,
  ]
})
export class InitialConfigurationModule { }
