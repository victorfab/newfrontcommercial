import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformWord'
})
export class TransformWordPipe implements PipeTransform {

  transform(value: string): string {
    //console.log("Valor", value);

    if(!value){
      return '';
    }
    //Dividir el nombre en palabras
    const words = value.split(' ');
    //Colocar la primera letra mayuscula de cada palabra
    const transform = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    //console.log("Valor transformado", transform);

    //Unir las palabras nuevamente
    return transform.join(' ');
  }

}
