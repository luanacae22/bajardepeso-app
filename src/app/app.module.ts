import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomePageComponent } from "./home/home-page/home-page.component";

import { DietModule } from "./diet/diet.module";
import { FoodModule } from "./food/food.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    DietModule,
    FoodModule,
    AppRoutingModule,
  ],
  providers: [
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
