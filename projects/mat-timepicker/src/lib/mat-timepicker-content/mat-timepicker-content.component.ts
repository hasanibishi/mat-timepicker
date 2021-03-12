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
  timeId = this.matService.timeId.value;

  constructor(
    private matService: MatTimepickerService
  ) {
    this.matService.initialTimeObs$.subscribe((time: any) => {
      let [value, id] = time;
      if (this.timeId === id) {

        this.matService.hoursObs$.subscribe(h => {
          let [hValue, hId] = h;
          hId = hId ? hId : this.timeId;

          if (this.timeId === hId)
            (hValue || hValue === 0) ? this.hours = hValue : this.hours = +value.split(':')[0];
        });

        this.matService.minutesObs$.subscribe(m => {
          let [mValue, mId] = m;
          mId = mId ? mId : this.timeId;

          if (this.timeId === mId)
            (mValue || mValue === 0) ? this.minutes = mValue : this.minutes = +value.split(':')[1]
        });
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.matService.setToggleTimePicker(false, this.timeId);
  }

  increaseHours() {
    this.matService.increaseHours(this.hours, this.timeId);
  }

  decreaseHours() {
    this.matService.decreaseHours(this.hours, this.timeId);
  }

  increaseMinutes() {
    this.matService.increaseMinutes(this.minutes, this.timeId);
  }

  decreaseMinutes() {
    this.matService.decreaseMinutes(this.minutes, this.timeId);
  }

  setTime() {
    let hour = this.hours.toString();
    if (hour.length === 1)
      hour = `0${hour}`;

    let minute = this.minutes.toString();
    if (minute.length === 1)
      minute = `0${minute}`;

    let time = `${hour}:${minute}`;
    this.matService.setTime(time, this.timeId);
    this.matService.setToggleTimePicker(false, this.timeId);
  }
}
