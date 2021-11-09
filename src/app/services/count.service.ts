import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  private countNumber = new Subject<number>();
  selectedCount$ = this.countNumber.asObservable();

  constructor() { }
  
  setSelectedCount(count: number) {
    this.countNumber.next(count);
  }
}
