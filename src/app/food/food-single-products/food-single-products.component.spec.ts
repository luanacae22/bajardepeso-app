import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSingleProductsComponent } from './food-single-products.component';

describe('FoodSingleProductsComponent', () => {
  let component: FoodSingleProductsComponent;
  let fixture: ComponentFixture<FoodSingleProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodSingleProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodSingleProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
