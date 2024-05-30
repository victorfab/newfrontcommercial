import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = 'commercial_cards';
  //hero:string = 'Drogfisher';

  /*onLike(saludo:string) {
    window.alert(saludo);
  }*/
   showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

}


