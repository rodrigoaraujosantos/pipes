import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formataCpf'
})
export class FormataCpfPipe implements PipeTransform {

  transform(value: string): string {
    const cpf = value.replace(/([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})/, '$1.$2.$3-$4')
    return cpf
  }

}
