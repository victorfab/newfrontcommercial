import { FechaFolioPipe } from './../../pipes/fecha-folio.pipe';
import { DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import  {jsPDF} from 'jspdf';

@Component({
  selector: 'app-modal-comprobante-limite-empleado',
  templateUrl: './modal-comprobante-limite-empleado.component.html',
  styleUrls: ['./modal-comprobante-limite-empleado.component.css']
})
export class ModalComprobanteLimiteEmpleadoComponent {

@Input() showComprobanteLimiteEmp:boolean = false;
@Output() closedComprobanteEmp = new EventEmitter<any>();
@Input() selectUser:any =null;
@Input() limiteCreditoUser:any = null;
@Input() obtenerLimiteEmp:any = null;
@Input() limiteInicialEmp:any = null;
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
  console.log(this.selectUser.idUsuarioSub);
  let dcarcacteres = this.selectUser.idUsuarioSub.substring(0,2);
  //Hora
  let hora = date.getHours().toString().padStart(2,'0');
  let minutos = date.getMinutes().toString().padStart(2,'0');
  let segundos = date.getSeconds().toString().padStart(2,'0');
  this.dcarcacteres = dcarcacteres + dateYear + dateMes + dateDia
  + hora + minutos + segundos;

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
  pdf.text('$' + this.decimalPipe.transform(this.limiteInicialEmp, '1.2-2') + ' MXN', 166, 57);

  pdf.text('Fecha y hora de operación ', 10,79);
  pdf.text(`${fechaFormateada}-${this.horaForm}`, 158,79);

  pdf.text('No. de folio  o referencia ',10,90);
  pdf.text(this.dcarcacteres, 158,90);


  pdf.setFont('helvetica','bold')
  pdf.text('Límite de crédito nuevo ', 10, 68);
  pdf.text('$' + this.decimalPipe.transform(this.obtenerLimiteEmp, '1.2-2') + ' MXN', 164, 68);




  pdf.setFontSize(14)
  pdf.setFont('helvetica','bold')
  pdf.text('Modificación del monto',145,33);
  pdf.text('de línea de crédito',157,38);



  this.closedComprobanteEmp.emit();
  // Guardar el archivo PDF
  pdf.save('Comprobante.pdf');
  }

}
