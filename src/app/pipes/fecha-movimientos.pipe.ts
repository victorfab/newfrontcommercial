import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaMovimientos'
})
export class FechaMovimientosPipe implements PipeTransform {

  transform(value: string): string {
    let meses= ["Enero","Febrero","Marzo", "Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre",
  "Noviembre","Diciembre"];
  //Almacena decha del movimiento con el parametro "value"
  let getFecha = value.split('-');
  let dia = parseInt(getFecha[0], 10);//base 10 decimal (0-9)
  let mes = parseInt(getFecha[1], 10);
  let year = parseInt(getFecha[2], 10);

  let fechaMovimiento = new Date(dia, mes - 1, year);
  //console.log(fechaMovimiento);
  //Almacena la fecha del sistema
  let fechaActual = new Date();
  //mes Actual: verifica si la fecha pertenece al mes actual antes de mostrar

  if(//Si el día,mes y año coinciden con la del sistema retorna 'Hoy'
    fechaMovimiento.getDate() === fechaActual.getDate() &&
    fechaMovimiento.getMonth() === fechaActual.getMonth() &&
    fechaMovimiento.getFullYear() === fechaActual.getFullYear()

  ){
    return 'Hoy';

  } else { //De lo contrario solo muestra la fecha
    dia = fechaMovimiento.getDate();
    let nuevoMes = meses[fechaMovimiento.getMonth()];
      return nuevoMes + ' ' + dia;
  }

}
}

