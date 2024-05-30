import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaTarjetas'
})
export class FechaTarjetasPipe implements PipeTransform {

  transform(value: string, mesActual?: string): string {
    //El formato de JS en fechas es MM/DD/YYYY
    //Value devuelve DD/MM/YYYY-
    let meses = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
    // Dividir la fecha en día, mes y año utilizando split '/' (cada que encuentre '/' divide la cadena de texto)
    let partesFecha = value.split('/');
    let dia = parseInt(partesFecha[0], 10);//base 10 decimal (0-9)
    let mes = parseInt(partesFecha[1], 10);
    let year = parseInt(partesFecha[2], 10);

    //Objeto Date con sintaxis "YYYY/MM/DD"
    let fechaTarjetas = new Date(year, mes - 1, dia); // Restamos 1 al mes para el índice correcto

    dia = fechaTarjetas.getDate();
    let mesNombre = meses[fechaTarjetas.getMonth()]; //Se asigna a una variable string
    year = fechaTarjetas.getFullYear();
    // Crear una nueva fecha con el formato "DD/MM/YYYY"
    return dia + '/' + mesNombre + '/' + year;
}
}

