import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";


import { HomePageComponent } from './home/home-page/home-page.component';

import { SharedModule } from "./shared/shared.module";
import { NotFoundComponent } from "./shared/not-found/not-found.component";

import { DietModule } from "./diet/diet.module";

import { FoodModule } from "./food/food.module";

import { ObjetivesComponent } from "./objetives/objetives.component";

const routes = [
    { path: '', component: HomePageComponent },
    { path: 'alimentos', loadChildren: './food/food.module#FoodModule' }, 
    { path: 'dieta', loadChildren: './diet/diet.module#DietModule' },
    { path: 'objetivos', component:ObjetivesComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes ),
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}