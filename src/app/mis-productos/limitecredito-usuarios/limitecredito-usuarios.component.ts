import { DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-limitecredito-usuarios',
  templateUrl: './limitecredito-usuarios.component.html',
  styleUrls: ['./limitecredito-usuarios.component.css']
})
export class LimitecreditoUsuariosComponent {
  //Referencia local del elemento en el código (h2)
  @ViewChild('limiteEditable', {static:false}) limiteEditable!: ElementRef;
  @Output() return = new EventEmitter<any>();

  //Crédito
  @Input() droDisponible: any;
  @Input() lmtCredito: any;
  @Input() fchLimite: any = null;
  @Input() fchCorte: any = null;
  @Input() sldGastado: any = [];
  @Input() lnaAsiganada: any = null;
  @Input() pgoMinimo: any = null;

  @Input() visibilityInfoUsuario:boolean = false;
  @Input() selectUser:any = null;
  @Input() limiteCreditoPorUsuario:any = null;
  //Limite
  @Input() visibilityLimitUser:boolean = false;

  @Input() limitCreditUser:any = null;
  @Output() exportMovimientos = new EventEmitter<any>();

  //**EDITANDO LIMITE- EMPLEADOS */
  @Input() editandoLimiteEmp: boolean = false;
  @Input() nuevoLimiteEmp: any = [];
  @Output() activarLimiteEmp = new EventEmitter<any>();
  @Output() mostrarLimiteEmp = new EventEmitter<any>();
  @Output() guardarNuevoLimiteEmp = new EventEmitter<any>();

  constructor(
    private decimalPipe :  DecimalPipe //Transforma la cantidad a decimales
  ){

  }

  nuevoLimiteEdit:any;
  textoOriginal:string= '';
  formatTimeout:any;

  onKeyDown(event: KeyboardEvent):void {

    const allowedKeys = ['Backspace', 'Delete', 'Arrowleft', 'ArrowRight', 'Tab'];
    const inputChar = String.fromCharCode(event.keyCode);

    if(!/^\d$/.test(inputChar) && event.key !== '.' && !allowedKeys.includes(event.key)){
      //Cnacela el evento si la tecla precionada no es un número , un punto decimal, ni una
      //tecla permitida
      event.preventDefault();
    }
    const limiteEdit = this.limiteEditable.nativeElement; //Obtiene el identificador de la etiqueta
    //limita la longitud a 14 cifras
    if(limiteEdit.innerText.length >=14 && !allowedKeys.includes(event.key)){
      event.preventDefault(); //Cancela el evento y si pasa de la longitud no sigue escribiendo
    }
    
  }

  onLimite(event: any) {
    const nuevoLimiteTexto = event.target.innerText.trim();

        // Limpiar cualquier temporizador existente
      if (this.formatTimeout) {
        clearTimeout(this.formatTimeout);
      }
      if(/^[0-9.]+$/.test(nuevoLimiteTexto)){
      // Configurar un temporizador para formatear después de 1000 ms de inactividad
        this.formatTimeout = setTimeout(() => {
          this.formatoFinal(event);
          this.establecerFoco();
        }, 1000);
      }
      this.textoOriginal = nuevoLimiteTexto;
  }

  formatoFinal(event: any) {
    const nuevoLimiteTexto = this.textoOriginal.replace(/,/g, ''); // Elimina comas
    const nuevoLimiteNumerico = Number(nuevoLimiteTexto);

    if (!isNaN(nuevoLimiteNumerico)) {

      const formatNumber = this.decimalPipe.transform(nuevoLimiteNumerico, '1.2-2');
      event.target.textContent = formatNumber;

      this.nuevoLimiteEmp = nuevoLimiteNumerico; //Se lo asigna a la etiqueta
      //this.nuevoLimiteEmp = nuevoLimiteNumerico;
      //console.log(this.nuevoLimiteEmp);
    }
  }

  establecerFoco() {
    if(this.limiteEditable && this.limiteEditable.nativeElement){
      setTimeout(()=>{
        const elemento = this.limiteEditable.nativeElement;
        elemento.focus();

        const range = document.createRange();
        range.selectNodeContents(elemento);
        range.collapse(false);

        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);

        //Al establecer el foco, aplica el estilo (color de borde)
        elemento.classList.add('limite-editable');

      },0);
    }
  }
  
}
