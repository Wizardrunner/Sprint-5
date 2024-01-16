// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StepsService } from './steps.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    StepsService
  ],
  bootstrap: []
})
export class AppModule { }

