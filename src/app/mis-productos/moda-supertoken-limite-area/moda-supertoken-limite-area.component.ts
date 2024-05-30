import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-moda-supertoken-limite-area',
  templateUrl: './moda-supertoken-limite-area.component.html',
  styleUrls: ['./moda-supertoken-limite-area.component.css']
})
export class ModaSupertokenLimiteAreaComponent {
  @Input() showTokenLimiteArea:boolean = false;
  @Output() closedTokenArea = new EventEmitter<any>();
  @Output() comprobanteLimiteArea = new EventEmitter<any>();
  @Output() guardarNuevoLimite = new EventEmitter<any>();
  //@Input() mostrarComprobanteLimiteArea:boolean = false;

  passwordChars: string[] = ["","","","","","","",""];
  inputColors:boolean[] = [false,false,false,false,false,false,false,false];

  verificarCaracteres(index: number){
    //Obtiene el paracmetro de cada input
    const char = this.passwordChars[index];
    //verifica que cada caracter sea número
    if(!/^[0-9]$/.test(char)) {
      //Si no es número, establece el valor en blanco
      this.passwordChars[index] = "";
      this.inputColors[index] = false;
    }else{
      //De lo contrario si es número, activa el borde
      this.inputColors[index] = true;
      //Si es número avanza automáticamente al siguiente input
      if(index < this.passwordChars.length -1){
        this.setFocus(index + 1);
      }
    }

    //Comprueba si todos los caracteres son números
    if( this.passwordChars.every(char => /^[0-9]$/.test(char))) {
      setTimeout(() => {
        this.passwordChars = ["","","","","","","",""];
        this.inputColors = [false,false,false,false,false,false,false,false];
        this.guardarNuevoLimite.emit();
        this.comprobanteLimiteArea.emit(); //Muestra el comprobante;
      },3000);
    }
  }

  setFocus(index:number){
    const inputElements = document.getElementsByClassName('container-token') as HTMLCollectionOf<HTMLInputElement>;
    if(inputElements[index]) {
      inputElements[index].focus();
    }
  }
}
