import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../food/food.service';
import { log } from 'util';

enum COMPONENT_STATES {
  CHOOSE_FOOD = 0,
  CHOOSE_DAY = 1,
  CHOOSE_MEAL = 2
};


@Component({
  selector: 'diet-planner',
  templateUrl: './diet-planner.component.html',
  styleUrls: ['./diet-planner.component.scss']
})
export class DietPlannerComponent implements OnInit {

  private quantity: number;

  public states = COMPONENT_STATES; 

  public currentState: number;

  public activeDay: number = null;

  public foods;

  public days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo'
  ];
  
  public meals = [
    'Desayuno',
    'Colación',
    'Comida',
    'Colación',
    'Cena',
  ];
  
  constructor(private foodService: FoodService) { }

  ngOnInit() {

    // obtener listado de alimentos

    this.foodService.fetchFoods()
    .subscribe( foods => this.foods = foods );

    this.currentState = this.states.CHOOSE_FOOD;  
  }


  handleQuantityChange( quantity ) {
    console.log(quantity);
    
    this.quantity = quantity; 
  }

  addFood( id: number ) {
    
    this.currentState = this.states.CHOOSE_DAY;

    console.log( "add Food", id, "quantity:", this.quantity );

  }

  returnToList() {
    this.currentState = this.states.CHOOSE_FOOD;
  }
  
  returnToDaySelector() {
    this.currentState = this.states.CHOOSE_DAY;
  }

  chooseDay( number: number ) {

    this.currentState = this.states.CHOOSE_MEAL;

    this.activeDay = number; 

    console.log("choose day", number );
    
  }

  chooseMeal( number: number ) {

    this.currentState = this.states.CHOOSE_FOOD;

    console.log("choose meal", number );
    
  }

}
