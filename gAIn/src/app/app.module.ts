import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FitnessFormComponent } from "./fitness-form/fitness-form.component";
import { AppRoutingModule } from './app-routing.module';
import { MealplanComponent } from './mealplan/mealplan.component';
import { FormsModule } from "@angular/forms";
import { ResultpageComponent } from './resultpage/resultpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MealplanComponent,
    HomeComponent,
    FitnessFormComponent,
    ResultpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
