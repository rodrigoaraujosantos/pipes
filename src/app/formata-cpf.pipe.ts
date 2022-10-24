import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formataCpf'
})
export class FormataCpfPipe implements PipeTransform {

  transform(value: string|number,
    
    ocultarAlgunsValores: boolean = false): string  {
    
      let resultado = value + '';

    resultado = resultado

    .padStart(11, '0')
    .substr(0, 11)
    .replace(/[^0-9]/, '')
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    if (ocultarAlgunsValores) {
      resultado = 'xxx.' + resultado.substr(4, 7) + '-xx';
    }

    return resultado
  }

}
