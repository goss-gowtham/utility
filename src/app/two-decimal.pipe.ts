import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoDecimal'
})
export class TwoDecimalPipe implements PipeTransform {

  transform(value:
    number): number {
    return Math.round(value * 100) / 100;
  }

}
