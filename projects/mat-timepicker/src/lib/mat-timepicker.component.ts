import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChange} from '@angular/core';
import {MatTimepickerService} from '../public-api';

@Component({
  selector: 'mat-timepicker',
  templateUrl: './mat-timepicker.component.html',
  styleUrls: ['./mat-timepicker.component.scss']
})
export class MatTimepickerComponent implements OnInit, OnDestroy {
  timePicker = false;
  time: string;

  @Input() public set selectedTime(time: string) {
    this.properties.config = time;
    console.log(time);

    this.time = time ? time : '00:00';
    this.matService.setInitialTime(this.time);
  }
  public get selectedTime() {
    return this.properties.config;
  }

  private properties: {config?: any} = {};
  @Output() updateValue: EventEmitter<any> = new EventEmitter();

  constructor(
    private matService: MatTimepickerService
  ) {
    this.matService.timeObs$.subscribe(resp => {this.time = resp});
    this.matService.toggleTimePickerObs$.subscribe(resp => this.timePicker = resp);
  }

  ngOnInit() {
    this.matService.timeObs$.subscribe(resp => {
      this.updateValue.emit(resp)
    });
  }

  // ngOnChanges(change: SimpleChange) {
  //   this.time = change['selectedTime'].currentValue ? change['selectedTime'].currentValue : '00:00';
  //   this.matService.setInitialTime(this.time);
  // }

  ngOnDestroy() {
    this.matService.setToggleTimePicker(false);
  }

  togglePicker() {
    this.timePicker ? this.matService.setToggleTimePicker(false) : this.matService.setToggleTimePicker(true);
  }
}
