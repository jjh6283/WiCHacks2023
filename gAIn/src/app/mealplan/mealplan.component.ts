import { Component } from '@angular/core'
import {Router} from "@angular/router";
import {ResponseService} from "../response.service";



@Component({
  selector: 'app-mealplan',
  templateUrl: './mealplan.component.html',
  styleUrls: ['./mealplan.component.css']
})
export class MealplanComponent {



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

  healthConcerns!: String | null

  phoneNumber!: String|null
  response: String
  misc!: String | null

  constructor(private router: Router, private rServe: ResponseService, ) {
    this.response = ""
  }

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
    // @ts-ignore
    this.age = document.getElementById("age").value;
    // @ts-ignore
    this.height = document.getElementById("height").value;
    // @ts-ignore
    this.weight = document.getElementById("weight").value;

    // @ts-ignore
    this.phoneNumber = document.getElementById("phoneNumber").value;

    // @ts-ignore
    this.healthConcerns = document.getElementById("healthConcerns").value;

    if(this.restriction == "other"){ // @ts-ignore
      this.otherRestriction = document.getElementById("otherRestriction").value;}

    if(this.gender == "other"){ // @ts-ignore
      this.otherGender = document.getElementById("otherGender").value;}

    var sentence:string = "Create me a weekly meal plan for a "+this.level+ " " +this.height+", " +this.weight+" pound, "+this.age+" year old ";

    if(this.gender == "other"){sentence+=this.otherGender;}
    else{sentence+=this.gender;}
    sentence+=" that is trying to "+ this.goal+" ";


    if (this.restriction == "other"){sentence+= "that is "+ this.otherRestriction+" ";}
    else if (this.restriction!=null){sentence+="that is " + this.restriction;}

    if(this.healthConcerns != ""){sentence+= " and has the following health concerns: "+ this.healthConcerns}

    sentence+=" (please list the dietary information)"

    const navigation: string[] = ['/resultpage'];
    if($myParam.length) {
      navigation.push($myParam);
    }
    this.router.navigate(navigation);

    if(this.phoneNumber){
      this.rServe.getResponse(this.phoneNumber, sentence).subscribe(response => {
        this.response = response
      })
    }

    return sentence
  }
}
