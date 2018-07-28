import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Diet } from './diet.model';
import { DietService } from './diet.service';


import { Observable } from 'rxjs';



@Injectable()
export class DietResolver implements Resolve<Observable<Diet>> {

  constructor( private dietService: DietService ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Diet> {
   
    // pasando un id falso, 0. podria ser el id de usuario
    return this.dietService.fetchDiet(0);
  
  }
  
}