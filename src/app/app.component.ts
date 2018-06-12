import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';

  displayParagraph: boolean = true;

  users = [{
    name: 'Ray',
  age: 20}, {name: 'Michael', age: 25}, {name: 'Ronald', age: 23}]


}
