import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any[], filterstring:string, propName:string): any[] {
    const searched=[];
    if(value.length===0 || filterstring==='' || propName===''){
      return value;
    }

    for(const Product of value){
      if(Product[propName]===filterstring){
        searched.push(Product);
      }
    }
    return searched;
  }
}





// Usage Pipe Syntax
// (
//   | searchFilter:'':'Product_name'
// )
