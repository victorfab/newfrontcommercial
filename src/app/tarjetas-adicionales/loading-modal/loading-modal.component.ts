import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-loading-modal',
  templateUrl: './loading-modal.component.html',
  styleUrls: ['./loading-modal.component.css']
})
export class LoadingModalComponent {
@Input() showLoading: boolean = false;
@Output() closeModal = new EventEmitter<void>();

ngAfterViewInit():void{
  const relleno = document.querySelector('.relleno') as HTMLElement;

    if(relleno){//Verifica si el elemento existe en el html
      setTimeout(() => {
        relleno.style.width = '100%';
      }, 0);//Inicia inmediatamente
    }
  }
}
