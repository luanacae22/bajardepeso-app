import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DietPlannerComponent } from './diet-planner/diet-planner.component';

const routes: Routes = [
  { path: 'dieta', component: DietPlannerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DietRoutingModule { }
