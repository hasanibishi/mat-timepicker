import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mat-timepicker-example';
  time = '';
  show = true;

  setValue(event: any) {
    if (event)
      console.log(event);
  }
}
