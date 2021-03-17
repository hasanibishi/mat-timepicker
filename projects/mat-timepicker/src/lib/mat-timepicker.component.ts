import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChange } from '@angular/core';
import { MatTimepickerService } from '../public-api';

@Component({
  selector: 'mat-timepicker',
  templateUrl: './mat-timepicker.component.html',
  styleUrls: ['./mat-timepicker.component.scss']
})
export class MatTimepickerComponent implements OnInit, OnDestroy {
  timePicker = false;
  selectedTime: string;

  @Output()
  timeChange = new EventEmitter<string>();

  @Input()
  get time() {
    return this.selectedTime;
  }

  set time(val) {
    this.selectedTime = val ? val : '00:00';
    this.matService.setInitialTime(this.selectedTime);

    this.matService.timeObs$.subscribe(resp => {
      this.timeChange.emit(resp ? resp : this.selectedTime)
    });
  }

  constructor(
    private matService: MatTimepickerService
  ) {
    this.matService.timeObs$.subscribe(resp => { this.selectedTime = resp });
    this.matService.toggleTimePickerObs$.subscribe(resp => this.timePicker = resp);
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.matService.setToggleTimePicker(false);
  }

  togglePicker() {
    this.timePicker ? this.matService.setToggleTimePicker(false) : this.matService.setToggleTimePicker(true);
  }
}
