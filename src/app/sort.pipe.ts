import { Pipe, PipeTransform } from '@angular/core';
import { IphoneBookArr } from './table/table.component';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(
    arrCars: IphoneBookArr[],
    sort: string,
    colonValue: string
  ): IphoneBookArr[] {
    if (!arrCars) return [];
    if (!sort) return arrCars;
    if (colonValue == 'firstName') {
      if (sort === 'asc') {
        return arrCars.sort((a, b) =>
          a.firstName > b.firstName ? 1 : a.firstName < b.firstName ? -1 : 0
        );
      }
      return arrCars.sort((a, b) =>
        a.firstName < b.firstName ? 1 : a.firstName > b.firstName ? -1 : 0
      );
    }
    if (colonValue == 'lastName') {
      if (sort === 'asc') {
        return arrCars.sort((a, b) =>
          a.lastName > b.lastName ? 1 : a.lastName < b.lastName ? -1 : 0
        );
      }
      return arrCars.sort((a, b) =>
        a.lastName < b.lastName ? 1 : a.lastName > b.lastName ? -1 : 0
      );
    }

    if (sort === 'asc') {
      return arrCars.sort((a, b) =>
        a.number > b.number ? 1 : a.number < b.number ? -1 : 0
      );
    }
    return arrCars.sort((a, b) =>
      a.number < b.number ? 1 : a.number > b.number ? -1 : 0
    );
  }
}
