import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonePipe'
})
export class PhonePipePipe implements PipeTransform {

  regNum = /^\+\d{2}\d{3}\d{3}\d{2}\d{2}$/

  transform(value: string): any {
    this.regNum.test(value)
    return  value.slice(2, 12);

  }

}
