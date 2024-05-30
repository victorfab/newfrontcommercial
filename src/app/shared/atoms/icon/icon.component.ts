import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sn-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IconComponent {
  @Input() icon: string = '';
}
