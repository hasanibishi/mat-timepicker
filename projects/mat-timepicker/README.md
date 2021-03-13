## Getting started
```
npm install --save mat-timepicker-hi
```

## Setup
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTimepickerModule, } from 'mat-timepicker'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatTimepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Using the component
```
<mat-timepicker (updateValue)="setValue($event)"
                     [time]="initTime"></mat-timepicker>
```


```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  initTime = '11:57';
  newTime: string;

  setValue(event: any) {
    if (event)
      this.newTime = event;
  }
}
```

## @Input and @Output of mat-timepicker-hi

| @Input        	| @Output      	| Type     	    |
|-----------------|-----------------|---------------|
| **time**        | (updateValue)  	| string        |




## License
MIT


## Author
Hasan Ibishi