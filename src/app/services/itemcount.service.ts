import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemcountService {
  private itemCount = new Subject<number>();
  displayedItem$ = this.itemCount.asObservable();

  constructor() { }
 
  setDisplayedItem(itemsCounted: number) {
    this.itemCount.next(itemsCounted);
    
    
  }
}
