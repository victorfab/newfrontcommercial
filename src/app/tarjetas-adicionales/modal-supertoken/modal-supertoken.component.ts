import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DatosUsuarioService } from '../services/datos-usuario.service';

@Component({
  selector: 'app-modal-supertoken',
  templateUrl: './modal-supertoken.component.html',
  styleUrls: ['./modal-supertoken.component.css']
})
export class ModalSupertokenComponent {
@Input() showSuperToken:boolean = false;
@Output() closeSuperToken = new EventEmitter<any>();
@Output() Comprobante = new EventEmitter<any>();
//@Input() mostrarComprobante:boolean = false;
//@Input() infoUsuariosSelect:any[]=[];
//@Input() passwordChars:string[] =[];

passwordChars: string[] = ["","","","","","","",""];
inputColors:boolean[] = [false,false,false,false,false,false,false,false];

verificarCaracteres(index: number) {
  const char = this.passwordChars[index];

  // Verifica que cada carácter sea un número
  if (!/^[0-9]$/.test(char)) {
    // Si no es un número, establece el valor en blanco
    this.passwordChars[index] = "";
    this.inputColors[index] = false;
  } else {
    //Activa el borde
    this.inputColors[index] = true;
    // Si es un número, avanza automáticamente al siguiente input si no es el último
    if (index < this.passwordChars.length - 1) {
      this.setFocus(index + 1);
    }
  }

  // Comprueba si todos los caracteres son números
  if (this.passwordChars.every(char => /^[0-9]$/.test(char))) {
    setTimeout(() => {
      this.passwordChars = ["", "", "", "", "", "", "", ""];
      this.inputColors = [false,false,false,false,false,false,false,false];
      this.Comprobante.emit();
    }, 3000);
  }
}

setFocus(index: number) {
  const inputElements = document.getElementsByClassName('container-token') as HTMLCollectionOf<HTMLInputElement>;
  if (inputElements[index]) {
    inputElements[index].focus();
  }
}
}
