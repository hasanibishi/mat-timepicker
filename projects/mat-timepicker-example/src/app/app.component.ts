import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mat-timepicker-example';

  setValue(event: any, oldValue: string) {
    console.log(event);
    console.log(oldValue);
  }
}
