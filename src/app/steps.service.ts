import { Injectable } from '@angular/core';
import { iStep } from './istep';

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  steps: iStep[] = [
    {
      title: 'Dedica moltes hores',
      description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
      img: './assets/img/step-1.jpg',
      bgcolor: '#ffffff'
    },
    {
      title: 'Sé pacient',
      description: 'No et desanimis si no veus resultats immediats. El procés de millora és gradual.',
      img: './assets/img/step-2.jpg',
      bgcolor: '#ffffff'
    },
    {
      title: 'No et rendeixis',
      description: 'Els obstacles són normals. El més important és no rendir-se.',
      img: './assets/img/step-3.jpg',
      bgcolor: '#ffffff'
    }
  ];

  constructor() {}

  getSteps() {
    return this.steps;
  }

}
