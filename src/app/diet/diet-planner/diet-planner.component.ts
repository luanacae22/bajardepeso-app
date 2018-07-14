import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diet-planner',
  templateUrl: './diet-planner.component.html',
  styleUrls: ['./diet-planner.component.css']
})
export class DietPlannerComponent implements OnInit {

  private quantity: number;

  constructor() { }

  ngOnInit() {
  }


  handleQuantityChange( quantity ) {
    this.quantity = quantity; 
  }

  addFood( id: number ) {
    console.log( "add Food", id, "quantity:", this.quantity );
  }

}
