import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { foodItems } from './fake-data/food_items-fake';
import { fakeDiet } from './fake-data/diet-fake';


@Injectable({
  providedIn: 'root'
})
export class BackendFakeService implements InMemoryDbService  {

  createDb() {
    return { foodItems, fakeDiet };
  }

}
