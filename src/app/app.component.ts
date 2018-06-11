import { Component } from '@angular/core';

interface Fighter {
  name: string;
  number: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  fighter1: Fighter = {name: 'Ray', number: 14};
  fighter2: Fighter = {name: 'Raynold', number: 24};


}
