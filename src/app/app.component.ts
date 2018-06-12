import { Component } from '@angular/core';


module Vehicle {
  export class Sedan {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;

    }
  }
 export const honda = new Sedan('Honda', 'Civic', 2019);
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ford = new Vehicle.Sedan('Ford', 'Taurus', 2017);
  honda = {make: 'Honda', model: 'CRV', year: 2017};
}
