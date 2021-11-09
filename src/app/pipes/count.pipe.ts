import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(value: any[], count:number ): any[] {
    const productsDisplay = [];
    for (let i = 0; i < count ; i++) {
        productsDisplay.push(value[i]);
    }
    const filteredproductsDisplay = productsDisplay.filter(function( element ) {
      return element !== undefined;
   });
     return filteredproductsDisplay;
  }

}
