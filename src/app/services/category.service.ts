import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories = new Subject<string>();
  selectedCategory$ = this.categories.asObservable();

  constructor() { }
 
  setSelectedCategory(category: string) {
    this.categories.next(category);
  }
}
