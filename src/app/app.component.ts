import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // where the component will be injected into index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hitesh Angular Crash Course Youtube';
  name = '@ancheetah';
  date = new Date();

  constructor() {
    // this is the first thing called when an object is instantiated
    console.log("constructor called");
    this.doSomething('Some Text');
  }

  doSomething(val: string): void {
    // this is a method of the AppComponent class
    val = "Awesome";
  }

}
 