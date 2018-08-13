import { NgModule } from "@angular/core";
import { 
MatToolbarModule
,MatIconModule
, MatCardModule
,MatInputModule
,MatButtonModule
,MatListModule
,MatGridListModule
,MatRadioModule
,MatCheckboxModule} from "@angular/material";
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatIconModule} from '@angular/material/icon';
// import { MatCardModule } from "@angular/material";
// import {MatInputModule} from '@angular/material/input';
// import {MatButtonModule} from '@angular/material/button';

const modules =[MatToolbarModule
    ,MatIconModule
    ,MatCardModule
    ,MatInputModule
    ,MatButtonModule
    ,MatListModule
    ,MatGridListModule
    ,MatRadioModule
    ,MatCheckboxModule]

@NgModule({
    imports:modules
    ,exports:modules
})

export class MaterialModule {}