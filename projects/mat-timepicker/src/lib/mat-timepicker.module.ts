import { NgModule } from '@angular/core';
import { MatTimepickerComponent } from './mat-timepicker.component';
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTimepickerContentComponent } from './mat-timepicker-content/mat-timepicker-content.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MatTimepickerComponent,
    MatTimepickerContentComponent],
  imports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    MatTimepickerComponent,
    MatTimepickerContentComponent
  ]
})
export class MatTimepickerModule { }
