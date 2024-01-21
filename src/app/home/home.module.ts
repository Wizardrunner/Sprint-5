// src/app/home/home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { EscenaComponent } from '../escena/escena.component';

@NgModule({
  declarations: [HomeComponent, EscenaComponent],
  imports: [CommonModule],
  exports: [HomeComponent, EscenaComponent],
})
export class HomeModule { }
