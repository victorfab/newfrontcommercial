import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownDirective } from '../../directives/dropdown.directive';
import { EstructuraService } from '../../../services/estructura.service';

@Component({
  selector: 'app-action-dropdown-menu',
  templateUrl: './action-dropdown-menu.component.html',
  styleUrls: ['./action-dropdown-menu.component.scss'],
  hostDirectives: [DropdownDirective],
})
export class ActionDropdownMenuComponent {
@Input() areaIndexPassed: number = 0;
@Input() subareaIndexPassed: number = 0;
@Input() showDropdownMenuForElement!: string;
@Output() public sendCurrentIndexes = new EventEmitter<number[]>();//event emmiter is an array, first element corresponds to area, second element corresponds to subarea

constructor(private estructuraService: EstructuraService){}
  
  eliminateArea(areaIndex: number) {
    this.estructuraService.eliminateArea(areaIndex);
  }

  onModifyArea(areaIndex: number){
    //passes the current indexes where you want to add a subarea
    this.sendCurrentIndexes.emit([areaIndex]);
  }

  eliminateSubarea(areaIndex:number, subareaIndex: number){
    this.estructuraService.eliminateSubarea(areaIndex, subareaIndex);
  }

  onModifySubarea(areaIndex: number, subareaIndex: number){
    //passes the current indexes where you want to add a subarea
    this.sendCurrentIndexes.emit([areaIndex, subareaIndex]);
  }

}
