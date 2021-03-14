import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  initTime = '11:57';
  newTime: string;

  setValue(event: string) {
    if (event)
      this.newTime = event;
  }
}
