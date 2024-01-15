// home.component.ts
import { Component, Input } from '@angular/core';
import { StepsService } from '../steps.service';
import { iStep } from '../istep';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() steps: iStep[] = [];

  constructor(private stepsService: StepsService) {
    this.steps = stepsService.getSteps();
  }
}
