import { NgModule } from '@angular/core';
import { MatTimepickerComponent } from './mat-timepicker.component';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [MatTimepickerComponent],
  imports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule
  ],
  exports: [MatTimepickerComponent]
})
export class MatTimepickerModule { }
