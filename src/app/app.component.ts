import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './home/home.module'; // Import HomeModule
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'onBoarding';
}
