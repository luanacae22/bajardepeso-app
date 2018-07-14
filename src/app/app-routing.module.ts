import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";


import { HomePageComponent } from './home/home-page/home-page.component';

import { SharedModule } from "./shared/shared.module";
import { NotFoundComponent } from "./shared/not-found/not-found.component";

const routes = [
    { path: '', component: HomePageComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}