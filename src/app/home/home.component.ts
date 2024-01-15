import { Component } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
