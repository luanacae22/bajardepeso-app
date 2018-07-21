import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Food } from '../food.model';
import { FoodService } from '../food.service';


import { Observable } from 'rxjs';



@Injectable()
export class FoodDetailResolver implements Resolve<Observable<Food>> {

  constructor( private foodService: FoodService ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Food> {
   
    return this.foodService.fetchFood(route.params['food_id']);
  
  }
  
}