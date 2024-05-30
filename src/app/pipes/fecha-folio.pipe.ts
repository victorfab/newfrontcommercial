import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaFolio'
})
export class FechaFolioPipe implements PipeTransform {

  transform(fecha: string): string {
    //console.log(fecha);
    //Divide la fecha en dia, mes y año
    const [dia,mesNum,year] = fecha?.split('/');
    //Obtener mes
    let meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const mes = meses[parseInt(mesNum,10) -1];

    //Obtener los ultimos digitos del año
    const formatoFecha = year.slice(-2);
    return `${dia}/${mes}/${formatoFecha}`;
  }

}
