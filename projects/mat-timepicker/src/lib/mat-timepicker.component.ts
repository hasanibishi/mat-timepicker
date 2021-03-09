import { Component, Input, OnInit } from '@angular/core';
import { MatTimepickerContentComponent } from './mat-timepicker-content/mat-timepicker-content.component';

@Component({
  selector: 'mat-timepicker',
  templateUrl: './mat-timepicker.component.html',
  styleUrls: ['./mat-timepicker.component.scss']
})
export class MatTimepickerComponent implements OnInit {
  timePicker = false;

  constructor() { }

  ngOnInit(): void {
  }

  togglePicker() {
    this.timePicker = !this.timePicker;
  }
}
