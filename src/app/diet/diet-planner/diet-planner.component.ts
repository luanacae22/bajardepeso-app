import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diet-planner',
  templateUrl: './diet-planner.component.html',
  styleUrls: ['./diet-planner.component.css']
})
export class DietPlannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addFood( id: number ) {
    console.log( "add Food", id );
  }

}
