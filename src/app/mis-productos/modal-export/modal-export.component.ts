import { FechaMovPdfPipe } from './../../pipes/fecha-mov-pdf.pipe';
import { TransformFechaPipe } from './../../pipes/transform-fecha.pipe';
import { DecimalPipe } from '@angular/common';
import { Component,EventEmitter, Input, Output } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-modal-export',
  templateUrl: './modal-export.component.html',
  styleUrls: ['./modal-export.component.css']
})
export class ModalExportComponent {
  @Input() showModal:boolean = false;
  //@Input() limiteCreditoExport:any = null;
  @Input() selectUser:any = null;
  @Input() movimientosUser: any ;
  @Input() periodoInicial:any;
  @Input() periodoFinal:any;


  //@Input() exportandoUser:any = null;
  @Input() exportArea:any = null;
  @Input() isSubarea:boolean = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() cargarMas = new EventEmitter<void>();

  constructor(private decimalPipe: DecimalPipe,
    private transformFechaPipe: TransformFechaPipe,
    private fechaMovPdfPipe: FechaMovPdfPipe
    ){

  }


  exportarCSV() {
    this.cargarMas.emit();
    //console.log("listo", this.movimientosUser);
    //console.log(this.movimientosUser.map((movimiento:any) => movimiento.fecha)); //Consumo endPoint


     // Crear un nuevo objeto jsPDF
  const doc = new jsPDF();

  const logoWith = 39;
  const logoHeight = 7;

    // Agregar imágenes
  const logoImg = new Image();
  logoImg.src = '../../../assets/media/Santander Imagotype.png';

  logoImg.onload = () =>{
    //Calcula el ancho y alto del PDF
    const pdfWith = doc.internal.pageSize.getWidth();
    const pdfHeight = doc.internal.pageSize.getHeight();
    //Coloca imagen en esquina superior izquierda
    doc.addImage(logoImg, 'PNG',10,10, logoWith, logoHeight);

      //doc.addImage(logoImg, 'SVG', 5, 10, 10, 10);
  // Títulos
  doc.setFontSize(7);
  doc.text('Banco Santander (México), S.A.', 10, 23);
  doc.text('Institución de Banca Múltiple', 10, 27);
  doc.text('Grupo Financiero Santander México', 10, 31);

    //Txt comprobación
    doc.setFontSize(14)
    doc.setFont('helvetica','bold')
    doc.text('Exportar movimientos',145,33);
    doc.setFontSize(12)
    doc.setFont('helvetica', 'normal');
    doc.text('Comprobante de operación',145,27);



  // Recorrer movimientosUser y agregar al PDF

  let y = 38; // Posición vertical inicial
  let z = 166;
  this.movimientosUser.forEach((movimiento: any) => {
    const fechaTransform = this.fechaMovPdfPipe.transform(movimiento.fecha);
    const Img = new Image();
        //Top
    Img.src = '../../../assets/media/Divider 01.png';
    if(y+30 >pdfHeight){
      doc.addPage();
      y=10;
    }
    doc.addImage(Img, 'PNG',10,y,190,0);
    // Fechaa
    doc.setFontSize(10);
    doc.text(`Fecha`, 10, y+18);
    doc.text(fechaTransform, z, y+18);
    y += 7;
    // Detalles del movimiento
    movimiento.movimientos.forEach((detalle: any) => {
      if(y+30 > pdfHeight){
        doc.addPage();
        y = 10;
      }
      //console.log(this.movimientosUser);
      y += 1;
      doc.setFontSize(10);
      doc.text(`Movimiento`, 10, y);
      doc.text(detalle.nombre, z, y);
      y+=3;
      doc.text(`Monto`, 10, y+16);
      doc.text('$'+ this.decimalPipe.transform(detalle.cantidad, '1.2-2') + ' MXN' , z, y+16);
        //Bott
    Img.src = '../../../assets/media/Divider 01.png';
    doc.addImage(Img, 'PNG',10,y+22,190,0);
    y += 7;

    });

    y += 22; // Espacio entre movimientos
  });

  // Guarda el PDF o abre una nueva ventana
  doc.save('movimientos.pdf');
  this.closeModal.emit();
  //this.showModal = false;
  }
  }
}

