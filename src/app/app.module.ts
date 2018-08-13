import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { MomentModule } from "angular2-moment";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomePageComponent } from "./home/home-page/home-page.component";

import { DietModule } from "./diet/diet.module";
import { FoodModule } from "./food/food.module";
import { SharedModule } from "./shared/shared.module";

import { BackendFakeService } from "./core/services/backend-fake/backend-fake.service";

import { FoodService } from "./food/food.service";
import { DietService } from "./diet/diet.service";

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ObjetivesComponent } from './objetives/objetives.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ObjetivesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MomentModule,
    SharedModule,
<<<<<<< HEAD
=======
    FormsModule,
    ReactiveFormsModule,
    DietModule,
>>>>>>> objetivos
    FoodModule,
    DietModule,
    
    
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      BackendFakeService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true
      }
    ),
  ],
  providers: [
    SharedModule,
    FoodService,
    DietService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
