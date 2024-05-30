import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-export-area',
  templateUrl: './modal-export-area.component.html',
  styleUrls: ['./modal-export-area.component.css']
})
export class ModalExportAreaComponent {
  
  @Input() showModalArea: boolean = false;
  @Input() exportCreditoArea:any = null;
  //@Input() areaLimiteCredito:any = null;
  @Input() exportArea:any = null;
  @Output() closedModalArea = new EventEmitter<void>()


  exportarCSV() {
    const csvRows = [
      ['Tarjeta', `TDC**${this.exportCreditoArea.numero}`],
      ['Periodo', `${this.exportCreditoArea.fecha_limite} - ${this.exportCreditoArea.fecha_corte}`]
      //
    ];

    if (this.exportArea) {
      csvRows.push(['Nombre', this.exportArea.area]);
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
