import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findInArray'
})
export class FindInArrayPipe implements PipeTransform {

  transform(value: object[], arg: string): number {
    for (const book of value) {
      if (book.hasOwnProperty(arg)) {
        return book[arg];
      }
    }
    return null;
  }
}
