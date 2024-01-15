import { Component, OnInit } from '@angular/core';
import { StepsService } from './steps.service';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {

  constructor(private stepsService: StepsService) {}

  ngOnInit() {
  }

}
