import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { Food } from '../food.model';
import { FoodService } from '../food.service';


import { Observable } from 'rxjs';



@Injectable()
export class FoodListResolver implements Resolve<Observable<Food[]>> {

  constructor( private foodService: FoodService ) { }

  resolve(): Observable<Food[]> {
   
    return this.foodService.fetchFoods();
  
  }
  
}