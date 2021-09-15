import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProviderType'
})
export class FilterProviderTypePipe implements PipeTransform {

  transform(flightObj: any[], filterWord: string): any {
    return flightObj.filter(val => val
      .providerType
      .toLowerCase()
      .includes(filterWord.toLowerCase()))
  }

}
