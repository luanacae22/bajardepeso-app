import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Food } from '../food.model';
import { FoodProduct } from '../food-product.model';
import { FoodProductService } from '../food-product.service';


@Component({
  selector: 'food-single-products',
  templateUrl: './food-single-products.component.html',
  styleUrls: ['./food-single-products.component.css']
})
export class FoodSingleProductsComponent implements OnInit {

  public food : Food;
  public products: FoodProduct;
  public productsList: FoodProduct[];


  constructor(private route: ActivatedRoute, private foodProductService: FoodProductService) { }

  ngOnInit() {

    this.productsList=[]
    
    this.food = this.route.snapshot.data['food'] || {};
    
    if (!!this.food.associated_products) {
      this.food.associated_products.map(product_id=>{
        this.foodProductService.fetchFoodProduct(product_id)
        .subscribe(product=>{
          this.productsList.push(product);
        })
      })
    }
    
  }
}
