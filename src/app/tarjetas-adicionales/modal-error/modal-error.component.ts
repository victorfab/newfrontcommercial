import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.css']
})
export class ModalErrorComponent {

  @Input() showUploadError: boolean = false;
  @Input() erroresfile: Array<any> = [];
  @Output() closedConfirmar = new EventEmitter<any>();
}
