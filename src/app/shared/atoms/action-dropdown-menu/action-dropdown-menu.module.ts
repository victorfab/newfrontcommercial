import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DropdownDirective } from "../../directives/dropdown.directive";
import { ActionDropdownMenuComponent } from "./action-dropdown-menu.component";
import { FLAME_ATOMS } from "../flame-atoms";

@NgModule({
    declarations: [
        ActionDropdownMenuComponent,
    ],
    imports: [
      CommonModule,
      DropdownDirective,
      ...FLAME_ATOMS
    ],
    exports: [
        ActionDropdownMenuComponent,
        DropdownDirective,
        ...FLAME_ATOMS
    ]
  })
  export class ActionDropdownMenuModule { }
