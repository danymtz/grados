import { Pipe, PipeTransform } from '@angular/core';
import { Validators } from '@angular/forms';

@Pipe({
  name: 'grados'
})
export class GradosPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    console.log(value, args);

    let escala = args[0];
    let valor;
    if (escala === 'c'){
      valor = (value*(9/5)+32);
      valor = valor + "°F";
    } 
    else if (escala === 'f') {
      valor = ((value-32)*(5/9));
      valor = valor + "°C";
    }
    return valor;
  }

}
