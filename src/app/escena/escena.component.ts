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
}
