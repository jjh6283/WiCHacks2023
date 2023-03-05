import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {
  }
  mealButtonClk($myParam: string = ''): void {
    const navigation: string[] = ['/mealplan'];
    if($myParam.length) {
      navigation.push($myParam);
    }
    this.router.navigate(navigation);
  }

  fitnessButtonClk($myParam: string = ''): void {
    const navigation: string[] = ['/fitnessform'];
    if($myParam.length) {
      navigation.push($myParam);
    }
    this.router.navigate(navigation);
  }


}
