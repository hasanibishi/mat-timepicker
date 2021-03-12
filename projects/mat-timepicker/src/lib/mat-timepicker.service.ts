import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatTimepickerService {

  timeId = new BehaviorSubject(0);
  // timeId$ = this.timeId.asObservable();

  private initialTime = new BehaviorSubject(['', 0]);
  initialTimeObs$ = this.initialTime.asObservable();

  private time = new BehaviorSubject(['', 0]);
  timeObs$ = this.time.asObservable();

  private toggleTimePicker = new BehaviorSubject([false, 0]);
  toggleTimePickerObs$ = this.toggleTimePicker.asObservable();

  private hours = new BehaviorSubject([null, 0]);
  hoursObs$ = this.hours.asObservable();

  private minutes = new BehaviorSubject([null, 0]);
  minutesObs$ = this.minutes.asObservable();

  constructor() {
    console.log(this.timeId.value);
  }

  setTimeId(id: number) {
    this.timeId.next(id);
  }

  setInitialTime(initTime: string, id: number) {
    this.initialTime.next([initTime, id]);
  }

  increaseHours(hour: number, id: number) {
    if (hour === 23)
      hour = 0;

    else if (hour < 23)
      hour++

    this.hours.next([hour, id]);
  }

  decreaseHours(hour: number, id: number) {
    if (hour === 0)
      hour = 23;
    else if (hour > 0)
      hour--;

    this.hours.next([hour, id]);
  }

  increaseMinutes(minute: number, id: number) {
    if (minute === 59)
      minute = 0;

    else if (minute < 59)
      minute++;

    this.minutes.next([minute, id]);
  }

  decreaseMinutes(minute: number, id: number) {
    if (minute === 0)
      minute = 59;

    else if (minute > 0)
      minute--;

    this.minutes.next([minute, id]);
  }

  setTime(time: string, id: number) {
    this.time.next([time, id]);
  }

  setToggleTimePicker(toggle: boolean, id: number) {
    this.toggleTimePicker.next([toggle, id]);
  }
}
