
mat-timepicker-hi is an easy library with timepicker. Fully wrote with TypeScript. This library is based on Angular Material.


![Screenshot_1](https://user-images.githubusercontent.com/32700638/111035342-58470e80-841a-11eb-9060-706640bed0e9.png)


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
    MatTimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Using the component
```
<mat-timepicker [(time)]="initTime"></mat-timepicker>
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
  
}
```


## License
MIT


## Author
Hasan Ibishi
