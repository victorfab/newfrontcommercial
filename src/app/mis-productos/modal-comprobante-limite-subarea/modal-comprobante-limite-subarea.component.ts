import { DecimalPipe } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FechaFolioPipe } from 'src/app/pipes/fecha-folio.pipe';
import  {jsPDF} from 'jspdf';

@Component({
  selector: 'app-modal-comprobante-limite-subarea',
  templateUrl: './modal-comprobante-limite-subarea.component.html',
  styleUrls: ['./modal-comprobante-limite-subarea.component.css']
})
export class ModalComprobanteLimiteSubareaComponent {
@Input() showComprobanteLimiteSubarea:boolean = false;
@Output() closedComprobanteSubarea = new EventEmitter<any>();
@Input() creditoSub:any =null;
@Input() idSubArea: any = null;
@Input() limitCreditoSub:any = null;
@Input() obtenerLimiteSub:any = null;
@Input() limiteInicialSub:any = null;
fechaForm:any;
horaForm:any;
dcarcacteres:any;

constructor(
  private decimalPipe :  DecimalPipe, //Transforma la cantidad a decimales
  private fechaFolioPipe: FechaFolioPipe
){

}

folioReferencia():void{
  let date = new Date();
  let dateYear = date.getFullYear();
  //Padstart asegura que la cadena tenga al menos 2 caracateres
  let dateMes = (date.getMonth() + 1).toString().padStart(2,'0');
  let dateDia = date.getDate().toString().padStart(2, '0');
  let dcarcacteres = this.idSubArea;
  //Hora
  let hora = date.getHours().toString().padStart(2,'0');
  let minutos = date.getMinutes().toString().padStart(2,'0');
  let segundos = date.getSeconds().toString().padStart(2,'0');
  this.dcarcacteres = dcarcacteres + dateYear + dateMes + dateDia + hora + minutos + segundos;

  //FECHA FORMATEADA
  let dia = date.getDate().toString().padStart(2,'0');
  let mes = (date.getMonth()+1).toString().padStart(2,'0');
  let year = date.getFullYear().toString();
  this.fechaForm = `${dia}/${mes}/${year}`;
  //HORA
  this.horaForm = `${hora}:${minutos}:${segundos}`;


}
  exportarCSV() {
  // Crear un nuevo objeto jsPDF
  const pdf = new jsPDF();
  const fechaFormateada = this.fechaFolioPipe.transform(this.fechaForm);
  const logoImg = new Image();
  logoImg.src = '../../../assets/media/Santander Imagotype.png';
  pdf.addImage(logoImg, 'PNG',10,10, 39,7);

    //Top
  logoImg.src = '../../../assets/media/Divider 01.png';
  pdf.addImage(logoImg, 'PNG',10,45,190,0);
  //Bottom
  logoImg.src = '../../../assets/media/Divider 01.png';
  pdf.addImage(logoImg, 'PNG',10,98,190,0);


  //
  pdf.setFontSize(7);
  pdf.text('Banco Santander (México), S.A.', 10, 23);
  pdf.text('Institución de Banca Múltiple', 10, 27);
  pdf.text('Grupo Financiero Santander México', 10, 31);

  pdf.setFontSize(12)
  pdf.text('Comprobante de operación',148,27);
    // Agregar contenido al PDF
  pdf.setFontSize(12);
  pdf.setFont('helvetica');
  pdf.text('Límite de crédito anterior ', 10, 57);
  pdf.text('$' + this.decimalPipe.transform(this.limiteInicialSub, '1.2-2') + ' MXN', 166, 57);

  pdf.text('Fecha y hora de operación ', 10,79);
  pdf.text(`${fechaFormateada}-${this.horaForm}`, 158,79);

  pdf.text('No. de folio  o referencia ',10,90);
  pdf.text(this.dcarcacteres, 158,90);


  pdf.setFont('helvetica','bold')
  pdf.text('Límite de crédito nuevo ', 10, 68);
  pdf.text('$' + this.obtenerLimiteSub + ' MXN', 164, 68);




  pdf.setFontSize(14)
  pdf.setFont('helvetica','bold')
  pdf.text('Modificación del monto',145,33);
  pdf.text('de línea de crédito',157,38);



  this.closedComprobanteSubarea.emit();
  // Guardar el archivo PDF
  pdf.save('Comprobante.pdf');
  }

/* exportarCSV() {
    const csvRows = [
      ['Límite de crédito anterior', `${this.limiteInicialSub}`],
      ['Límite de crédito nuevo', `${this.obtenerLimiteSub}`]
    ];

    const csvContent = csvRows.map(row => row.join(',')).join('\n');
    const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Comprobante.csv');
    document.body.appendChild(link);
    link.click();
  } */
}
