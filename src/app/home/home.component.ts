// home.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { StepsService } from '../steps.service';
import { iStep } from '../istep';
import { AnimationStateService } from '../animation-state.service'; // Import the service

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() steps: iStep[] = [];

  constructor(private stepsService: StepsService, private animationStateService: AnimationStateService) {}

  ngOnInit() {
    this.steps = this.stepsService.getSteps();
  }

  setCurrentStep(step: number): void {
    this.animationStateService.setCurrentStep(step);
  }
}
