import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-fitness-form',
  templateUrl: './fitness-form.component.html',
  styleUrls: ['./fitness-form.component.css']
})
export class FitnessFormComponent {

  constructor(private router: Router) {
  }

  skillLevel = "";
  upperBodyDays = "";
  lowerBodyDays = "";
  cardioDays = "";
  healthConcerns = "";

  age = "";

  goal = "";

  phoneNumber = "";
  selectSkillLevel(value:string): void{
    this.skillLevel = value;
  }

  selectGoal(value:string): void{
    this.goal = value
  }
  selectUpperBodyDays(value:string): void{
    this.upperBodyDays = value;
  }
  selectLowerBodyDays(value:string): void{
    this.lowerBodyDays = value;
  }
  selectCardioDays(value:string): void{
    this.cardioDays = value;
  }

  submitClicked($myParam: string = '') : String {
    // @ts-ignore
    this.healthConcerns = document.getElementById("healthConcerns").value;
    // @ts-ignore
    this.age = document.getElementById("age").value;

    // @ts-ignore
    this.phoneNumber = document.getElementById("phoneNumber").value;

    var sentence = "Create ";

    if(this.skillLevel == "beginner"){ sentence += "a "}
    else{ sentence += "an "}
    sentence += this.skillLevel +" workout plan that is in depth for each day for someone who is trying to " + this.goal
      + ", is "+ this.age;

    if(this.healthConcerns!= ""){sentence+= " has the following health concerns: "+ this.healthConcerns;}

    sentence += " and wants to do cardio " + this.cardioDays;
    if(this.cardioDays =="1") {sentence += " day, lower body " +this.lowerBodyDays;}
    else{sentence += " days, lower body " +this.lowerBodyDays;}

    if(this.lowerBodyDays =="1") {sentence += " day, and upper body " +this.upperBodyDays;}
    else{sentence += " days, and upper body " +this.upperBodyDays;}

    if(this.upperBodyDays =="1") {sentence += " day a week with reps";}
    else{sentence += " days a week with reps";}

    console.log(sentence);
    const navigation: string[] = ['/resultpage'];
    if($myParam.length) {
      navigation.push($myParam);
    }
    this.router.navigate(navigation);

    return sentence;
  }
}
