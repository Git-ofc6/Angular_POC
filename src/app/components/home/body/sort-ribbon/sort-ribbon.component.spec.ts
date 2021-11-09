import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortRibbonComponent } from './sort-ribbon.component';

describe('SortRibbonComponent', () => {
  let component: SortRibbonComponent;
  let fixture: ComponentFixture<SortRibbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortRibbonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
