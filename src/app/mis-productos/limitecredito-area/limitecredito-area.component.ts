import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-limitecredito-area',
  templateUrl: './limitecredito-area.component.html',
  styleUrls: ['./limitecredito-area.component.css']
})
export class LimitecreditoAreaComponent {

//Referencia local del elemento en el código (h2)
@ViewChild('limiteEditable', {static:false}) limiteEditable!: ElementRef;

@Input() visibilityInfoArea:boolean = false;
@Input() areaLimiteCredito:any =null;
@Input () visibilityLimiteCreditoArea:boolean=false;
@Input() limiteCredito:any = null;
@Input() limiteUsers:any = null;
@Output() irInfoUsuario = new EventEmitter<string>();
@Output() regresarArea = new EventEmitter<any>();


@Input() visibilityMasUsuarios:boolean = true;
@Input() moreUsuarios:boolean = false;
@Output() masUsuarios = new EventEmitter<void>();
@Output() menosUsuarios = new EventEmitter<void>();
@Output() exportArea = new EventEmitter<any>();
@Output() solicitando = new EventEmitter<any>();
primerElemento:boolean = true;

@Input() editandoLimiteCredito: boolean = false;
@Input() nuevoLimiteCredito: any = [];
@Output() activarEdicion = new EventEmitter<any>();
@Output() mostrarEditarLimite = new EventEmitter<any>();
//@Output() closedLimite = new EventEmitter<any>();
@Input() fchLimite: any = null;
@Input() fchCorte: any = null;
@Input() pgoMinimo: any = null;

public page!:number;//Recoge el numero de la pagina en la que estamos


nuevoLimiteEdit:any;
textoOriginal:string= '';
formatTimeout:any;
errorMensaje: string ='';
onLimite(event: any) {
  const nuevoLimiteTexto = event.target.innerText.trim();

      // Limpiar cualquier temporizador existente
    if (this.formatTimeout) {
      clearTimeout(this.formatTimeout);
    }
    if(nuevoLimiteTexto === ''){
      //Si el contenido se borra, No programa el temporizador y no muestra el mensaje
      this.errorMensaje = '';
    }else if(/^[0-9.]+$/.test(nuevoLimiteTexto)){
    // Configurar un temporizador para formatear después de 1000 ms de inactividad
      this.formatTimeout = setTimeout(() => {
        this.formatoFinal(event);
        this.establecerFoco();
      }, 1000);
      //Limpia el mensaje de error si existe
      this.errorMensaje = '';
    }else{
      //Muestra el mensaje de error
      this.errorMensaje = ('Ingrese solo números');
    }
    this.textoOriginal = nuevoLimiteTexto;
}

formatoFinal(event: any) {
  const nuevoLimiteTexto = this.textoOriginal.replace(/,/g, ''); // Elimina comas
  const nuevoLimiteNumerico = parseFloat(nuevoLimiteTexto);

  if (!isNaN(nuevoLimiteNumerico)) {
    const nuevoLimiteFormateado = nuevoLimiteNumerico.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    event.target.textContent = nuevoLimiteFormateado;
    this.nuevoLimiteCredito = nuevoLimiteFormateado;
    console.log(this.nuevoLimiteCredito);
  }
}

establecerFoco() {
  console.log('Estableciendo foco', this.areaLimiteCredito);
  console.log('Estableciendo foco2', this.limiteCredito);

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
cancelar(){
  this.nuevoLimiteCredito = this.limiteCredito;
  this.editandoLimiteCredito = false;
  if(this.nuevoLimiteEdit && this.nuevoLimiteEdit.nativeElement){
    this.nuevoLimiteEdit.nativeElement.innerText = `${this.nuevoLimiteCredito}`;
  }
}

}
