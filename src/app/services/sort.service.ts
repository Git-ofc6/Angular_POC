import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortService {
 
  private sorted = new Subject<string>();
  selectedSort$ = this.sorted.asObservable();

  constructor() { }
  setSelectedSort(sort: string) {
    this.sorted.next(sort);
  }
}
