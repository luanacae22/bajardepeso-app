import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Food } from "../food.model";

@Component({
  selector: 'food-preview',
  templateUrl: './food-preview.component.html',
  styleUrls: ['./food-preview.component.scss']
})
export class FoodPreviewComponent implements OnInit {

  private quantity: number = 1;

  constructor() { }

  ngOnInit() { }


  addFood() {

    if( this.quantity > 0 ) {
      let payload = {
        id: this.food.id,
        quantity: this.quantity
      }

      console.log(payload);
      
      this.addFoodEmitter.emit(payload)
      
    }
  }

  handleQuantityChange( quantity ) {
    console.log(quantity);
    
    this.quantity = quantity; 
  }


  @Input() food: Food;

  @Output() addFoodEmitter = new EventEmitter<Object>();

}
