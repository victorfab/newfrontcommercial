import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-supertoken-limite-empleado',
  templateUrl: './modal-supertoken-limite-empleado.component.html',
  styleUrls: ['./modal-supertoken-limite-empleado.component.css']
})
export class ModalSupertokenLimiteEmpleadoComponent {
@Input() showTokenLimiteEmp : boolean = false;
@Output() closedTokenEmp = new EventEmitter<any>();
@Output() guardarNuevoLimiteEmp = new EventEmitter<any>();
@Output() comprobanteLimiteEmp = new EventEmitter<any>();

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
    //Si es correcto se activa un timer}
    setTimeout(() =>{
      //Limpia los input y el borde
      this.passwordChars = ["","","","","","","",""];
      this.inputColors = [false,false,false,false,false,false,false,false];
      //Llama al metodo para guardar el uevo límite
      //this.guardarNuevoLimiteEmp.emit();
      //Abre el modal comprobante
      this.comprobanteLimiteEmp.emit();
    },3000);
  }
  }
  setFocus(index:number){
    const inputElements = document.getElementsByClassName('container-token') as HTMLCollectionOf<HTMLInputElement>;
    if(inputElements[index]){
      inputElements[index].focus();
    }
  }
  limpiarInputs(){
    this.passwordChars = ["","","","","","","",""];
    this.inputColors = [false,false,false,false,false,false,false,false];
  }
}
