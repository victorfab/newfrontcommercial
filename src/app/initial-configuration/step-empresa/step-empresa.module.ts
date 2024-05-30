import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepEmpresaRoutingModule } from './step-empresa-routing.module';
import { StepEmpresaComponent } from './step-empresa.component';
import { IconModule } from 'src/app/shared/atoms/icon/icon.module';
import { StepperModule } from 'src/app/shared/atoms/stepper/stepper.module';
import { SharedModule } from 'src/app/shared/shared.module';
//import { ActionDropdownMenuModule } from 'src/app/shared/atoms/action-dropdown-menu/action-dropdown-menu.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StepEmpresaRoutingModule,
    SharedModule
  ],
  exports: []
})
export class StepEmpresaModule { }
