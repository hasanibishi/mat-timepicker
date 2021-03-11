import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatTimepickerModule} from 'mat-timepicker'
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatTimepickerModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
