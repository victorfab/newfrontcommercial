import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-limitecredito-subarea',
  templateUrl: './limitecredito-subarea.component.html',
  styleUrls: ['./limitecredito-subarea.component.css']
})
export class LimitecreditoSubareaComponent {
  //Referencia local del elemento en el código (etiqueta h2 - ##limiteEditable)
@ViewChild('limiteEditable', {static:false}) limiteEditable!:ElementRef;
@Output() return = new EventEmitter<any>();
public page!:number;//Recoge el numero de la pagina en la que estamos

@Input() showLimiteCreditoSub:boolean = false;
@Input() limitCreditoSub:any =null;
//@Input() creditoSub:any = null;
@Output() solicitando = new EventEmitter<any>();
@Output() exportSub = new EventEmitter<any>();

@Input() showLimiteCredito:boolean = false;
@Input() limiteCreditoUsers:Array<any> = [];
@Output() infoUsuario = new EventEmitter<any>();
@Input() showMasUsuarios:boolean = true;
@Input() moreUsuarios:boolean = false;
@Output() masUsuarios = new EventEmitter<void>();
@Output() menosUsuarios = new EventEmitter<void>();

//EDITAR LIMITE CREDITO-SUB
@Input() editandoLimiteCredito:boolean = false;
@Input() nuevoLimiteCredito: any = [];
@Output() activarEdicion = new EventEmitter<any>();
@Output() mostrarEditarLimite = new EventEmitter <any>();


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

establecerFoco(){
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
