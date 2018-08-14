import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Food } from '../food.model';
import { Diet } from '../../diet/diet.model';

@Component({
  selector: 'food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  public foods: Food[];
  public display_foods: Food[];
  public diet: Diet;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.foods = this.route.snapshot.data['foods'] || {};
    this.diet = this.route.snapshot.data['diet'] || {};

    this.diet.days.map((day)=>{
      day.meals.map((meal)=>{
        meal.food_items.map((food_item_quantity)=>{
          this.foods.find(food_item=>food_item.id==food_item_quantity.id).in_diet=true
        })
      })
    })
    this.displayAllFoods()

  }
  
  displayAllFoods(){
    this.display_foods=this.foods
  }

  displayDietFoods(){
    this.display_foods=this.foods.filter(food_item=>food_item.in_diet)
  }

}
