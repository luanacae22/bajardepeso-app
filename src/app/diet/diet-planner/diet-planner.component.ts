import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Diet } from "../../diet/diet.model";
import { Food } from "../../food/food.model";
import { FoodService } from '../../food/food.service';

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


  public states = COMPONENT_STATES; 

  public currentState: number;

  public activeDay: number = null;

  public foods: Food[];


  public currentFoodObject: any;

  public diet: Diet;

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
  
  constructor(private route: ActivatedRoute, private foodService: FoodService) { }

  ngOnInit() {

    // obtener listado de alimentos
    this.foods = this.route.snapshot.data['foods'] || {};
    // this.diet = this.route.snapshot.data['diet'] || {};
    

    console.log(this.diet );
    
    this.foods.map( food => {
      
      this.foodService.fetchMeasurementUnitData(food.measurement_unit)
      .subscribe( measurementUnit => {
        food.measurement_unit_labels = measurementUnit.labels;
      })
    
    });


    // antes de usar 'resolver', hacíamos fetch directo
    // this.foodService.fetchFoods()
    // .subscribe( foods => this.foods = foods );

    this.currentState = this.states.CHOOSE_FOOD;  
  }


  addFood(payload: Object) {
    
    this.currentFoodObject = payload;

    this.currentState = this.states.CHOOSE_DAY;

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
    let chosenFood = this.foods.find( food => food.id === this.currentFoodObject.id )

    console.log("add to meal", number, chosenFood.name  );
    
  }

}
