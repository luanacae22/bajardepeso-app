import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietPlannerComponent } from './diet-planner/diet-planner.component';
import { DietRoutingModule } from "./diet-routing.module";

import { FoodModule } from "../food/food.module";

@NgModule({
  imports: [
    CommonModule,
    FoodModule,
    DietRoutingModule
  ],
  declarations: [DietPlannerComponent]
})
export class DietModule { }
