import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private brands = new Subject<string>();
  selectedBrand$ = this.brands.asObservable();

  constructor() { }
 
  setSelectedBrand(brand: string) {
    this.brands.next(brand);
  }
}

