import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/home/nav/nav.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { BodyComponent } from './components/home/body/body.component';
import { SidenavComponent } from './components/home/body/sidenav/sidenav.component';
import { CarouselComponent } from './components/home/body/carousel/carousel.component';
import { SortRibbonComponent } from './components/home/body/sort-ribbon/sort-ribbon.component';
import { ProductsComponent } from './components/home/body/products/products.component';
import { PagenationComponent } from './components/home/body/pagenation/pagenation.component';
import { SortService } from './services/sort.service';
import { BrandService } from './services/brand.service';
import { CountService } from './services/count.service';
import { CategoryService } from './services/category.service';
import { SortFilterPipe } from './pipes/sort-filter.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { CountPipe } from './pipes/count.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BodyComponent,
    SidenavComponent,
    CarouselComponent,
    SortRibbonComponent,
    ProductsComponent,
    PagenationComponent,
    SortFilterPipe,
    SearchFilterPipe,
    CountPipe,


  ],
  imports: [
    BrowserModule
  ],
  providers: [SortService, CategoryService, BrandService, CountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
