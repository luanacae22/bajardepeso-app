import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DietPlannerComponent } from './diet-planner/diet-planner.component';
import { FoodListResolver } from '../food/food-list/food-list.resolver';

const routes: Routes = [
  {
    path: 'dieta',
    component: DietPlannerComponent,
    resolve: {
      foods: FoodListResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    FoodListResolver
  ]
})
export class DietRoutingModule { }
