import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { foodItems } from './fake-data/food_items-fake';
import { foodProducts } from './fake-data/food_products-fake';
import { diet } from './fake-data/diet-fake';
import { measurementUnits } from './fake-data/measurement_units-fake';


@Injectable({
  providedIn: 'root'
})
export class BackendFakeService implements InMemoryDbService  {

  createDb() {
    return { foodItems, foodProducts, diet, measurementUnits };
  }

}
