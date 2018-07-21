import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Food } from "./food.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private endpointUrl: string = 'api/foodItems';

  constructor( private http: HttpClient ) { }
  
  fetchFoods() : Observable<Food[]> {

    return this.http
    .get<Food[]>(`${this.endpointUrl}/`)
    
  }

}
