// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StepsService } from './steps.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule
  ],
  providers: [
    StepsService
  ],
  bootstrap: []
})
export class AppModule { }

