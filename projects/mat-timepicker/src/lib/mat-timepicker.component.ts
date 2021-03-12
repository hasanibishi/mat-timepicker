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

  @Input() selectedTime: any;
  @Input() selectedTimeId: number;

  @Output() updateValue: EventEmitter<any> = new EventEmitter();

  constructor(
    private matService: MatTimepickerService
  ) {
    this.matService.timeObs$.subscribe((resp: any) => {
      let [value, id] = resp;
      if (this.selectedTimeId === id)
        this.time = value;
    });

    this.matService.toggleTimePickerObs$.subscribe((resp: any) => {
      let [value, id] = resp;
      if (this.selectedTimeId === id)
        this.timePicker = value;
    });
  }

  ngOnInit() {
    this.matService.timeObs$.subscribe((resp: any) => {
      let [value, id] = resp;
      if (this.selectedTimeId === id)
        this.updateValue.emit(value)
    });

    this.time = this.time ? this.time : this.selectedTime;
  }

  ngOnDestroy() {
    this.matService.setToggleTimePicker(false, this.selectedTimeId);
  }

  togglePicker() {
    this.matService.setTimeId(this.selectedTimeId);
    this.matService.setInitialTime(this.selectedTime ? this.selectedTime : '00:00', this.selectedTimeId);
    this.timePicker ? this.matService.setToggleTimePicker(false, this.selectedTimeId) : this.matService.setToggleTimePicker(true, this.selectedTimeId);
  }
}
