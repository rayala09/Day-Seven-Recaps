import { Component } from '@angular/core';

class CarBrand {
  make: string;

  constructor(make: string) {
    this.make = make;
  }
}

class Car extends CarBrand {
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    super(make);
    this.model = model;
    this.year = year;
  }

  getDetails() {
    return ( `The year of the vehicle is ${this.make},
      the model of the vehicle is ${this.model},
      of the year ${this.year}
      `);
  }
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ford = new CarBrand('Ford');
  honda = new Car('Honda', 'Civic', 2018);
}
