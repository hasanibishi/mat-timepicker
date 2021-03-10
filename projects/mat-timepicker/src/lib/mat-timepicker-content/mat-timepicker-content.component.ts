import {Component, OnInit} from '@angular/core';
import {MatTimepickerService} from '../mat-timepicker.service';

@Component({
  selector: 'mat-timepicker-content',
  templateUrl: './mat-timepicker-content.component.html',
  styleUrls: ['./mat-timepicker-content.component.scss']
})
export class MatTimepickerContentComponent implements OnInit {

  hours: number;
  minutes: number;

  constructor(
    private matService: MatTimepickerService
  ) {
    this.matService.hoursObs$.subscribe(h => {h ? this.hours = h : this.hours = 0});
    this.matService.minutesObs$.subscribe(m => {m ? this.minutes = m : this.minutes = 0});
  }

  ngOnInit(): void {
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
