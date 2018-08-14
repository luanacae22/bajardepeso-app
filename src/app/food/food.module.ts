import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FoodPreviewComponent } from './food-preview/food-preview.component';
import { FoodSingleProductsComponent } from './food-single-products/food-single-products.component';

@NgModule({
  imports: [
    CommonModule,
    FoodRoutingModule
  ],
  declarations: [FoodListComponent, FoodDetailComponent, FoodPreviewComponent, FoodSingleProductsComponent],
  exports: [FoodPreviewComponent]
})
export class FoodModule { }
