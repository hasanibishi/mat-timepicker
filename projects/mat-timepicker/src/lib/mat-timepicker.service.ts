import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatTimepickerService {

  private initialTime = new BehaviorSubject('');
  initialTimeObs$ = this.initialTime.asObservable();

  private time = new BehaviorSubject('');
  timeObs$ = this.time.asObservable();

  private toggleTimePicker = new BehaviorSubject(false);
  toggleTimePickerObs$ = this.toggleTimePicker.asObservable();

  private hours = new BehaviorSubject(0);
  hoursObs$ = this.hours.asObservable();

  private minutes = new BehaviorSubject(0);
  minutesObs$ = this.minutes.asObservable();

  constructor() {
    this.timeObs$.subscribe(console.log)
    this.minutesObs$.subscribe(console.log)
  }

  setInitialTime(initTime: string) {
    this.initialTime.next(initTime);
  }

  increaseHours(hour: number) {
    if (hour === 23)
      hour = 0;

    else if (hour < 23)
      hour++

    this.hours.next(hour);
  }

  decreaseHours(hour: number) {
    if (hour === 0)
      hour = 23;
    else if (hour > 0)
      hour--;

    this.hours.next(hour);
  }

  increaseMinutes(minute: number) {
    if (minute === 59)
      minute = 0;

    else if (minute < 59)
      minute++;

    this.minutes.next(minute);
  }

  decreaseMinutes(minute: number) {
    if (minute === 0)
      minute = 59;

    else if (minute > 0)
      minute--;

    this.minutes.next(minute);
  }

  setTime(time: string) {
    this.time.next(time);
  }

  setToggleTimePicker(toggle: boolean) {
    this.toggleTimePicker.next(toggle);
  }
}
