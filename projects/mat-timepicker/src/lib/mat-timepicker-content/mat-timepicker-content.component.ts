import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTimepickerService} from '../mat-timepicker.service';

@Component({
  selector: 'mat-timepicker-content',
  templateUrl: './mat-timepicker-content.component.html',
  styleUrls: ['./mat-timepicker-content.component.scss']
})
export class MatTimepickerContentComponent implements OnInit, OnDestroy {

  hours: number;
  minutes: number;

  constructor(
    private matService: MatTimepickerService
  ) {
    this.matService.initialTimeObs$.subscribe(time => {
      this.matService.hoursObs$.subscribe(h => {
        console.log(h);
        (h || h === 0) ? this.hours = h : this.hours = +time.split(':')[0]
      });
      this.matService.minutesObs$.subscribe(m => {
        console.log(m);
        (m || m === 0) ? this.minutes = m : this.minutes = +time.split(':')[1]
      });
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.matService.setToggleTimePicker(false);
  }

  increaseHours() {
    this.matService.increaseHours(this.hours);
  }

  decreaseHours() {
    this.matService.decreaseHours(this.hours);
  }

  increaseMinutes() {
    this.matService.increaseMinutes(this.minutes);
  }

  decreaseMinutes() {
    this.matService.decreaseMinutes(this.minutes);
  }

  setTime() {
    let hour = this.hours.toString();
    if (hour.length === 1)
      hour = `0${hour}`;

    let minute = this.minutes.toString();
    if (minute.length === 1)
      minute = `0${minute}`;

    let time = `${hour}:${minute}`;
    this.matService.setTime(time);
    this.matService.setToggleTimePicker(false);
  }
}
