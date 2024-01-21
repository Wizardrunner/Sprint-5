// animation-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationStateService {
  private currentStepSubject = new BehaviorSubject<number>(0);
  currentStep$ = this.currentStepSubject.asObservable();

  setCurrentStep(step: number): void {
    this.currentStepSubject.next(step);
  }
}
