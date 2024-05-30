import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-export-subarea',
  templateUrl: './modal-export-subarea.component.html',
  styleUrls: ['./modal-export-subarea.component.css']
})
export class ModalExportSubareaComponent {
@Input() showModalSubArea:boolean =false;
@Output() closedModalSubArea = new EventEmitter<void>();
@Input() exportCreditoSubArea:any = null;
@Input() exportSubArea:any = null;

exportarCSV() {
  const csvRows = [
    ['Tarjeta', `TDC**${this.exportCreditoSubArea.numero}`],
    ['Periodo', `${this.exportCreditoSubArea.fecha_limite} - ${this.exportCreditoSubArea.fecha_corte}`]
    //
  ];

  if (this.exportSubArea) {
    csvRows.push(['Nombre', this.exportSubArea.subarea]);
  }

 /* if (this.exportandoArea) {
    csvRows.push(['Área', this.exportandoArea.area]);
  }
*/
  const csvContent = csvRows.map(row => row.join(',')).join('\n');
  const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'datos.csv');
  document.body.appendChild(link);
  link.click();
}
}
