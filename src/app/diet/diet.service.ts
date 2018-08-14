import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Diet } from "./diet.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DietService {

  private endpointUrl: string = 'api/diet';

  constructor(private http: HttpClient) { }

  fetchDiet( diet_id: number ): Observable<any> {
// console.log("fetchDiet", diet_id);

    return this.http
    .get<any>(`${this.endpointUrl}/${diet_id}/`)
    
  }


}
