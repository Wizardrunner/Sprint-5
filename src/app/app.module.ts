import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EscenaComponent } from './escena/escena.component';
import { StepsService } from './steps.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EscenaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    StepsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
