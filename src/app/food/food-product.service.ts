import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { FoodProduct } from "./food-product.model";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FoodProductService {
  
  private endpointUrl: string = 'api/foodProducts';

  constructor(private http: HttpClient) { }

  fetchFoodProducts(): Observable<FoodProduct[]> {

    return this.http
      .get<FoodProduct[]>(`${this.endpointUrl}/`)

  }

  fetchFoodProduct( food_product_id: number ): Observable<FoodProduct> {

    return this.http
    .get<FoodProduct>(`${this.endpointUrl}/${food_product_id}/`)
    
  }
}
