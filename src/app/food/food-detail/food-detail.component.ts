import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Food } from "../food.model";

@Component({
  selector: 'food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {

  public food: Food;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    // obtener listado de alimentos
    this.food = this.route.snapshot.data['food'] || {};
    
  }

}
