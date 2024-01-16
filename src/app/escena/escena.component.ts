// escena.component.ts
import { Component, Input } from '@angular/core';
import { iStep } from '../istep';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {
  @Input() steps: iStep[] = [];
  currentStep: number = 0;

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  getCurrentStep(): iStep {
    return this.steps[this.currentStep];
  }

getProgressBarPosition(): string {
  const progressBarStep = 15;
  return `${this.currentStep * progressBarStep}px`;
}
}
