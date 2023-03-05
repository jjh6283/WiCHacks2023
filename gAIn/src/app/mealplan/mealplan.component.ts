import { Component } from '@angular/core'
import {Router} from "@angular/router";



@Component({
  selector: 'app-mealplan',
  templateUrl: './mealplan.component.html',
  styleUrls: ['./mealplan.component.css']
})
export class MealplanComponent {

  constructor(private router: Router) {
  }

  restrictionState!: boolean// true for other box is being displayed
  otherRestriction!: String | null
  restriction!: String | null
  goal!: String | null
  level!: String | null
  age!: number | null
  weight!: number | null
  height!: number | null
  genderState!: boolean
  otherGender!: String | null
  gender!: String | null
  misc!: String | null



  handleRestriction(res: String) : void {
    this.restriction = res
    this.restrictionState = this.restriction == 'other';
  }

  handleGoal(g: String): void {
    this.goal = g
  }

  handleLevel(l: String): void {
    this.level = l
  }

  handleGender(gen: String) : void {
    this.gender = gen
    this.genderState = this.gender == 'other';
  }

  createPrompt($myParam: string = '') : String {
    let prompt = 'Create a meal plan for a '
    if(this.gender === null){
      this.gender = this.otherGender
    }

    console.log(this.restriction, this.otherRestriction, this.gender, this.otherGender)

    const navigation: string[] = ['/resultpage'];
    if($myParam.length) {
      navigation.push($myParam);
    }
    this.router.navigate(navigation);

    return prompt
  }
}
