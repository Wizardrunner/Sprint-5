// escena.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { iStep } from '../istep';
import { trigger, transition, style, animate } from '@angular/animations';
import { AnimationStateService } from '../animation-state.service';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css'],
  animations: [
    trigger('animSlider', [
      transition(':increment', [
        style({ transform: 'translateX(100%)' }),
        animate('.3s ease-out', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)' }),
        animate('.3s ease-out', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class EscenaComponent {
  @Input() steps: iStep[] = [];
  @Output() stepChanged = new EventEmitter<number>();
  currentStep: number = 0;

  constructor(private animationStateService: AnimationStateService) {}

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      this.stepChanged.emit(this.currentStep);
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.stepChanged.emit(this.currentStep);
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
