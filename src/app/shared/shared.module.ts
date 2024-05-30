import { NgModule } from '@angular/core';
import { AtomsModule } from './atoms/atoms.module';
import { IconComponent } from './atoms/icon/icon.component';
import { IconModule } from './atoms/icon/icon.module';
import { MATERIALCOMPONENTS } from './material-components';
import { DropdownDirective } from './directives/dropdown.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [ 
              CommonModule,
              AtomsModule,
              FormsModule,
              MATERIALCOMPONENTS,
              DropdownDirective
           ],
  exports: [ 
              AtomsModule,
              MATERIALCOMPONENTS,
              FormsModule,
              DropdownDirective
           ],
  providers: []
})
export class SharedModule {}
