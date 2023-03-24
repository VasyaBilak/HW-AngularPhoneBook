import { Pipe, PipeTransform } from '@angular/core';
import { IphoneBookArr } from './table/table.component';

@Pipe({
  name: 'search',
  pure: false,
})
export class SearchPipe implements PipeTransform {
  transform(arrBook: IphoneBookArr[], field: string): IphoneBookArr[] {
    if (!arrBook) return [];
    if (!field) return arrBook;
    return arrBook.filter(
      (val) =>
        val.firstName.toLowerCase().includes(field.toLowerCase()) ||
        val.lastName.toLowerCase().includes(field.toLowerCase()) ||
        val.number
          .toString()
          .concat('0', val.number.toString())
          .toLowerCase()
          .includes(field.toLowerCase())
    );
  }
}
