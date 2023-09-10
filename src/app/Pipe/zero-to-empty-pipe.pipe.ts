import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroToEmptyPipe'
})
export class ZeroToEmptyPipePipe implements PipeTransform {

  transform(value: number): string {
    return (value == 0) ? "" : value.toString();
  }
}
