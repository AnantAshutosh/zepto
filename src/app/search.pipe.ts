import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchTextMap: any): any[] {
    if (!items || !searchTextMap || Object.values(searchTextMap).every((value: unknown) => !value?.toString().trim())) {
      return items;
    }

    return items.filter(item => {
      return Object.keys(searchTextMap).some(column => {
        const searchText = (searchTextMap[column] as string)?.toLowerCase();
        const columnValue = item[column];
        if (columnValue !== undefined && columnValue !== null) {
          const normalizedValue = columnValue.toString().toLowerCase();
          return normalizedValue.includes(searchText);
        }
        return false;
      });
    });
  }
}
