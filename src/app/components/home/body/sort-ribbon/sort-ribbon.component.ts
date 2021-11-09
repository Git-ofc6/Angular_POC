import { Component, OnInit} from '@angular/core';
import { SortService } from 'src/app/services/sort.service';
import { CountService } from 'src/app/services/count.service';
import { ItemcountService } from 'src/app/services/itemcount.service';



@Component({
  selector: 'app-sort-ribbon',
  templateUrl: './sort-ribbon.component.html',
  styleUrls: ['./sort-ribbon.component.css']
})
export class SortRibbonComponent implements OnInit {
  totalItems:any;
     
   constructor(private sort: SortService, private count:CountService, private itemsCounted: ItemcountService) { }
  
  sortOrder(event: any){
    this.sort.setSelectedSort(event.target.value);
  }
  countNumber(event: any){
    this.count.setSelectedCount(event.target.value);
  } 
 
  ngOnInit(): void {
    this.itemsCounted.displayedItem$.subscribe(itemsCounted=>{this.totalItems =itemsCounted});
   
    
  }
 
}
