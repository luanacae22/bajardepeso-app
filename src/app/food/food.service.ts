import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private endpointUrl: string = 'api/foodItems';

  constructor( private http: HttpClient ) { }
  
  fetchFoods() {

    return this.http
    .get(`${this.endpointUrl}/`)
    
  }

}
