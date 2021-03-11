import {Component, EventEmitter, Input, OnInit, Output, SimpleChange} from '@angular/core';
import {MatTimepickerService} from '../public-api';

@Component({
  selector: 'mat-timepicker',
  templateUrl: './mat-timepicker.component.html',
  styleUrls: ['./mat-timepicker.component.scss']
})
export class MatTimepickerComponent implements OnInit {
  timePicker = false;
  time: string;

  @Input() selectedTime: any;
  @Output() updateValue: EventEmitter<any> = new EventEmitter();

  constructor(
    private matService: MatTimepickerService
  ) {
    this.matService.timeObs$.subscribe(resp => this.time = resp)
    this.matService.toggleTimePickerObs$.subscribe(resp => this.timePicker = resp)
  }

  ngOnInit() {
    this.matService.timeObs$.subscribe(resp => this.updateValue.emit(resp))
  }

  ngOnChanges(change: SimpleChange) {
    this.time = change['selectedTime'].currentValue;
  }

  openPicker() {
    this.timePicker ? this.matService.setToggleTimePicker(false) : this.matService.setToggleTimePicker(true)
  }
}
