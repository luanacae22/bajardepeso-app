import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';

import { FoodListResolver } from './food-list/food-list.resolver';
import { FoodDetailResolver } from './food-detail/food-detail.resolver';
import { DietResolver } from '../diet/diet.resolver';
import { FoodSingleProductsComponent } from './food-single-products/food-single-products.component';

const routes: Routes = [
  {
    path: 'alimentos',
    component: FoodListComponent,
    resolve: {
      foods: FoodListResolver,
      diet:DietResolver
    }
  },
  {
    path: 'alimentos/:food_id',
    component: FoodDetailComponent,
    resolve: {
      food: FoodDetailResolver
    }
  },
  {
    path: 'alimentos/:food_id/comprar',
    component: FoodSingleProductsComponent,
    resolve: {
      food: FoodDetailResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    FoodListResolver,
    FoodDetailResolver
  ]
})
export class FoodRoutingModule { }
