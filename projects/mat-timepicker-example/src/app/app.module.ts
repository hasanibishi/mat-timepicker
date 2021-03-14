import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTimepickerModule, } from 'mat-timepicker'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatTimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
