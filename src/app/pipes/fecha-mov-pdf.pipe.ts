import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaMovPdf'
})
export class FechaMovPdfPipe implements PipeTransform {

  transform(value: string): string {
    // Verifica si la cadena de entrada es válida
    if (!value) {       return value;     }
    // El formato de la fecha de entrada es 'YYYY-MM-DD'
    let partesFecha = value.split('-');
    let year = parseInt(partesFecha[0], 10);
    let mes = parseInt(partesFecha[1], 10);
    let dia = parseInt(partesFecha[2], 10);
    // Verifica si las partes de la fecha son números válidos
    if (isNaN(year) || isNaN(mes) || isNaN(dia)) {
      return value;
    }
    // Objeto Date con sintaxis 'YYYY/MM/DD'
    let fechaTarjetas = new Date(year, mes - 1, dia);
    // Verifica si la fecha es válida
    if (isNaN(fechaTarjetas.getTime())) {
      return value;
    }
    dia = fechaTarjetas.getDate();
    let meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    let mesNombre = meses[fechaTarjetas.getMonth()];
    year = fechaTarjetas.getFullYear();

    let fechaY = year.toString().slice(-2);
    // Crea una nueva fecha con el formato 'DD/MM/YYYY'
    return dia + '/' + mesNombre + '/' + fechaY;
  }

}
