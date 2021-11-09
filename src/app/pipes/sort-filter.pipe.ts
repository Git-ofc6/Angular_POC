import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortFilter'
})
export class SortFilterPipe implements PipeTransform {

  transform(value: any[], args: any[]): any {
    const sortBy = args[0];
    const sortDirection=args[1];

    let multiplier =1;
    if (sortDirection==='desc'){
      multiplier=-1;
    }
    value.sort((a: any, b: any)=> {
      if (a[sortBy] < b[sortBy]){
        return -1* multiplier;
      }else if(a[sortBy] > b[sortBy]){
        return 1 * multiplier;
      }else{
        return 0;
      }
    }
    );
    return value;


  }

}
