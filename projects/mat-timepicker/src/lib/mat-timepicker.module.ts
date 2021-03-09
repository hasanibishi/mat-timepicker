import { NgModule } from '@angular/core';
import { MatTimepickerComponent } from './mat-timepicker.component';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatDatepickerModule, } from '@angular/material/datepicker'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTimepickerContentComponent } from './mat-timepicker-content/mat-timepicker-content.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    MatTimepickerComponent,
    MatTimepickerContentComponent],
  imports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  exports: [MatTimepickerComponent]
})
export class MatTimepickerModule { }
