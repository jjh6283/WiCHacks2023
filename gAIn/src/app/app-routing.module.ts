import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FitnessFormComponent } from "./fitness-form/fitness-form.component";
import { MealplanComponent } from "./mealplan/mealplan.component";
import { ResultpageComponent} from "./resultpage/resultpage.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'fitnessform', component: FitnessFormComponent },
  { path: 'mealplan', component: MealplanComponent },
  { path: 'resultpage', component: ResultpageComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
