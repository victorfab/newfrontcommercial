import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-supertoken-limite-subarea',
  templateUrl: './modal-supertoken-limite-subarea.component.html',
  styleUrls: ['./modal-supertoken-limite-subarea.component.css']
})
export class ModalSupertokenLimiteSubareaComponent {
@Input() showTokenLimiteSubarea : boolean = false;
@Output() closedTokenSubarea = new EventEmitter<any>();
@Output() guardarNuevoLimiteSub = new EventEmitter<any>();
@Output() comprobanteLimiteSubarea = new EventEmitter<any>();

passwordChars: string[]= ["","","","","","","",""];
inputColors: boolean[] = [false,false,false,false,false,false,false,false];

verificarCaracteres(index: number){
  //obtiene el parametro de cada input
  const char = this.passwordChars[index];
  if(!/^[0-9]$/.test(char)){
    //Si no son números, establece el valor en blanco
    this.passwordChars[index] = "";
    this.inputColors[index] = false;
  }else{
    //Caso contrario, activa el borde
    this.inputColors[index] = true;
    //Avanza automaticamente en cada input
    if(index < this.passwordChars.length -1){
      this.setFocus(index + 1);
    }
  }
  //Comprueba si todos los caracteres son números
  if(this.passwordChars.every(char => /^[0-9]$/.test(char))){
    //Si es correcto se activa un timer
    setTimeout(() =>{
      //Limpia los input y el borde
      this.passwordChars = ["","","","","","","",""];
      this.inputColors = [false,false,false,false,false,false,false,false];
      //Llama al metodo para guardar el uevo límite
      this.guardarNuevoLimiteSub.emit();
      //Abre el modal comprobante
      this.comprobanteLimiteSubarea.emit();
    },3000);
  }
  }
  setFocus(index:number){
    const inputElements = document.getElementsByClassName('container-token') as HTMLCollectionOf<HTMLInputElement>;
    if(inputElements[index]){
      inputElements[index].focus();
    }
  }

}
