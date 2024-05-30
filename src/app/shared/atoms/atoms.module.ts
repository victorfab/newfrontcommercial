import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlameIconModule } from '@ngx-mxflame/atoms/icon';
import { IconModule } from './icon/icon.module';
import { FLAME_ATOMS, FLAME_SERVICES } from './flame-atoms';
import { DialogModule } from '@angular/cdk/dialog';
import { FileAttachmentInputModule } from '@ngx-mxflame/atoms/file-attachment-input';
import { FlameSidenavModule } from '@ngx-mxflame/molecules/sidenav';
import { StepperModule } from './stepper/stepper.module';
import { ActionDropdownMenuModule } from './action-dropdown-menu/action-dropdown-menu.module';

@NgModule({
  declarations: [
  ],
  imports: [
              CommonModule,
              DialogModule, 
              FlameIconModule, 
              FileAttachmentInputModule, 
              FlameSidenavModule,
              ActionDropdownMenuModule,
              StepperModule,
              ...FLAME_ATOMS
           ],
  exports: [
            ActionDropdownMenuModule,
            StepperModule,
            ...FLAME_ATOMS
           ],
  providers: [...FLAME_SERVICES]
})
export class AtomsModule {}
