
import { Component, OnInit, ViewChildren } from '@angular/core';
import productsData from 'src/app/Data/Product.json';
import { Product } from 'src/app/models/product.model';
import { SortService } from 'src/app/services/sort.service';
import { CountService } from 'src/app/services/count.service';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';
import { ItemcountService } from 'src/app/services/itemcount.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Products: Product[] = productsData;
  selectedOrder: string = "asc";
  selectedCount: number = 3;
  selectedBrand: string = "apple";
  selectedCategory: string = "smartphones";
  displayedItem: number;
  item: number;

  constructor(private sort: SortService, private brand: BrandService, private count: CountService, private category: CategoryService, private itemsCounted: ItemcountService) { }

  @ViewChildren('myVar') displayedItems: any;


  ngOnInit(): void {
    this.sort.selectedSort$.subscribe(sort => { this.selectedOrder = sort });
    this.brand.selectedBrand$.subscribe(brand => { this.selectedBrand = brand });
    this.count.selectedCount$.subscribe(count => { this.selectedCount = count });
    this.category.selectedCategory$.subscribe(category => { this.selectedCategory = category });

  }
  ngAfterViewChecked() {
    this.item = Number(this.displayedItems.toArray().length);
    setTimeout(() => {
      this.itemsCounted.setDisplayedItem(this.displayedItem = this.item);
    }, 500)
  }
}
