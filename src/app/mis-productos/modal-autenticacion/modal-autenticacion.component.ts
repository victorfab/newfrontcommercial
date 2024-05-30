import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-autenticacion',
  templateUrl: './modal-autenticacion.component.html',
  styleUrls: ['./modal-autenticacion.component.css']
})
export class ModalAutenticacionComponent {
@Input() showAuthentication: boolean = false;
@Input() mostrarLimite:boolean = false;
@Output() closeAuthentication = new EventEmitter<any>();
@Output() mostrarLimiteEmpresa = new EventEmitter<any>();

authenticationCode: string[]= ["","","","","","","",""];
inputColors: boolean[]=[false,false,false,false,false,false,false,false];
progresoCodigo: number = 0;

verificarCaracteres(index:number){
  //Obtiene el parametro de cada input
  const char = this.authenticationCode[index];
  //Evalua el caracter escrito si estos son números
  if(!/^[0-9]$/.test(char)){
    //Si no son números establece el valor en blanco y no aplica el borde
    this.authenticationCode[index] = "";
    this.inputColors[index] = false;
  }else{
    //Caso contrario, activa el borde
    this.inputColors[index] = true;
    const inputsLlenos =  this.authenticationCode.filter(char => /^[0-9]$/.test(char) && char !== "").length;
    this.progresoCodigo = Math.round((inputsLlenos / this.authenticationCode.length) * 100);
    //Avanza automaticamente
    if(index < this.authenticationCode.length -1){
      this.setFocus(index + 1);
    }
  }
  /*
  //Comprueba si todos los caracateres son números
  if(this.authenticationCode.every(char => /^[0-9]$/.test(char) && char !== "")){
    //Si es correcto se activa un timer
    setTimeout(() =>{
      //Limpia los bordes de los inputs
      this.authenticationCode = ["","","","","","","",""];
      this.inputColors = [false,false,false,false,false,false,false,false];
      //Muestra el limite
      //this.mostrarLimite = true;
    },3000);
  }*/
}
setFocus(index:number){
  const inputElements = document.getElementsByClassName('container-limite') as HTMLCollectionOf<HTMLInputElement>;
  if(inputElements[index]){
    inputElements[index].focus();
  }
}
continuarAuthenticarion(){
  this.showAuthentication = false;
  if(this.todosInputsLlenos()){
        //Si es correcto se activa un timer
        setTimeout(() =>{
          //Limpia los bordes de los inputs
          this.authenticationCode = ["","","","","","","",""];
          this.inputColors = [false,false,false,false,false,false,false,false];
          //Muestra el limite
          //this.mostrarLimite = true;
          //console.log("Listo");
          this.mostrarLimiteEmpresa.emit();
        });
  this.progresoCodigo = 0;
  }
}
todosInputsLlenos():boolean{
  //Verifica si los carcateres son numeros y si todos los inputs estan llenos
  return this.authenticationCode.every(char => /^[0-9]$/.test(char) && char !== "");
}
limpiarInputs(){
  this.authenticationCode = ["","","","","","","",""];
  this.inputColors = [false,false,false,false,false,false,false,false];
}
}
