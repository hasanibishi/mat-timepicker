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

  @Input() time: any;
  @Output() updateValue: EventEmitter<any> = new EventEmitter();

  constructor(
    private matService: MatTimepickerService
  ) {
    this.matService.timeObs$.subscribe(resp => { this.selectedTime = resp });
    this.matService.toggleTimePickerObs$.subscribe(resp => this.timePicker = resp);
  }

  ngOnInit() {
    this.matService.timeObs$.subscribe(resp => {
      this.updateValue.emit(resp)
    });
  }

  ngOnChanges(change: SimpleChange) {
    this.selectedTime = change['time'].currentValue ? change['time'].currentValue : '00:00';
    this.matService.setInitialTime(this.selectedTime);
  }

  ngOnDestroy() {
    this.matService.setToggleTimePicker(false);
  }

  togglePicker() {
    this.timePicker ? this.matService.setToggleTimePicker(false) : this.matService.setToggleTimePicker(true);
  }
}
