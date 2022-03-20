import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom1'
})
export class Custom1Pipe implements PipeTransform {

  transform(value: number, ...args:number[]): unknown {
    const [someValue] = args;
    return value*10*someValue;
  }
}
