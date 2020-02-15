import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findInArray'
})
export class FindInArrayPipe implements PipeTransform {

  transform(value: [[string, number]], arg: string): number {
    let index = -1;
    value.filter((el, ind) => {
      if (el[0] === arg) { index = ind; }
    });
    return index !== -1 ? value[index][1] : null;
  }
}
