import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mat-timepicker-example';

  show = true;

  data = [{id: 1, time: '02:10'}, {id: 2, time: '12:35'}, {id: 3, time: '22:16'}];

  setValue(event: any) {

  }



}
