import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { MeasurementUnit } from "../shared/models/measurement-unit.model";
import { Food } from "./food.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private endpointUrl: string = 'api/foodItems';
  private measurementUnitsEndpointUrl: string = 'api/measurementUnits';

  constructor(private http: HttpClient) { }

  fetchFoods(): Observable<Food[]> {

    return this.http
      .get<Food[]>(`${this.endpointUrl}/`)

  }

  fetchFood( food_id: number ): Observable<Food> {

    return this.http
    .get<Food>(`${this.endpointUrl}/${food_id}/`)
    
  }

  

  fetchMeasurementUnitData( id: Number ) {

    return this.http
    .get<MeasurementUnit>(`${this.measurementUnitsEndpointUrl}/${id}/`)
      
  }

}
