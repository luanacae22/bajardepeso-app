import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietPlannerComponent } from './diet-planner/diet-planner.component';
import { DietRoutingModule } from "./diet-routing.module";


@NgModule({
  imports: [
    CommonModule,
    DietRoutingModule
  ],
  declarations: [DietPlannerComponent]
})
export class DietModule { }
