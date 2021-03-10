import { Component, OnInit } from '@angular/core';
import { MatTimepickerService } from '../public-api';

@Component({
  selector: 'mat-timepicker',
  templateUrl: './mat-timepicker.component.html',
  styleUrls: ['./mat-timepicker.component.scss']
})
export class MatTimepickerComponent implements OnInit {
  timePicker = false;
  time: string;

  constructor(
    private matService: MatTimepickerService
  ) {
    this.matService.timeObs$.subscribe(resp => this.time = resp)
    this.matService.toggleTimePickerObs$.subscribe(resp => this.timePicker = resp)
  }

  ngOnInit() {

  }

  openPicker() {
    this.timePicker ? this.matService.setToggleTimePicker(false) : this.matService.setToggleTimePicker(true)
  }
}
