import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  selectedBrand:string;
  selectedCategory:string;

  constructor(private brand: BrandService, private category: CategoryService) { }
  brandSelection = (brandName: string) => {
    this.brand.setSelectedBrand(this.selectedBrand = brandName);
  }
  categorySelection = (categoryName: string) => {
    this.category.setSelectedCategory(this.selectedCategory = categoryName);
  }


  ngOnInit(): void {
  }

}
