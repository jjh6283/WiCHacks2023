import { Component } from '@angular/core';

@Component({
  selector: 'app-fitness-form',
  templateUrl: './fitness-form.component.html',
  styleUrls: ['./fitness-form.component.css']
})
export class FitnessFormComponent {

  skillLevel = "";
  upperBodyDays = "";
  lowerBodyDays = "";
  cardioDays = "";
  healthConcerns = "";

  age = "";

  selectSkillLevel(value:string): void{
    this.skillLevel = value;
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

  submitClicked(){
    // @ts-ignore
    this.healthConcerns = document.getElementById("healthConcerns").value;
    // @ts-ignore
    this.age = document.getElementById("age").value;

    var sentence = "Create ";

    if(this.skillLevel == "beginner"){ sentence += "a "}
    else{ sentence += "an "}
    sentence += this.skillLevel +" workout plan that is in depth for each day for someone who is " + this.age;

    if(this.healthConcerns!= ""){sentence+= " has the following health concerns: "+ this.healthConcerns;}

    sentence += " and wants to do cardio " + this.cardioDays;
    if(this.cardioDays =="1") {sentence += " day, lower body " +this.lowerBodyDays;}
    else{sentence += " days, lower body " +this.lowerBodyDays;}

    if(this.lowerBodyDays =="1") {sentence += " day, and upper body " +this.upperBodyDays;}
    else{sentence += " days, and upper body " +this.upperBodyDays;}

    if(this.upperBodyDays =="1") {sentence += " day a week with reps";}
    else{sentence += " days a week with reps";}

  }

}
