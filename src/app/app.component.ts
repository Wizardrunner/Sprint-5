// app.components.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './home/home.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'onBoarding';
}
