import { Component } from '@angular/core';


@Component({
  // selector: 'greet',
  // tslint:disable-next-line:component-selector
  selector: '.greet',
  // templateUrl: './greet-message.component.html',
  template: `
    <h1> Hellow World </h1>
  `,
  // styleUrls: ['./greet-message.component.css']
  styles: [`
    h1{
      color: blue;
    }
  `]

})


export class GreetComponent {


}
