import { Component } from '@angular/core';
import { Todo } from './todo';
@Component({
  selector: 'app-root', // where the component will be injected into index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Todo';

  // Initializing these here is fine
  todoValue: string = "";
  list: Todo[] = [];

  // Can also use a constructor which is called during object creation
  // and before the component is mounted
  // constructor(){
  //   this.todoValue = ""; 
  //   this.list = [];
  // }

  // ngOnInit() is a lifecycle method called after the constructor
  // this is where you may want to perform more complex initializations
  // like data fetching.
  // https://angular.io/guide/lifecycle-hooks

  addItem(){
    if (this.todoValue !== "") {
      // add Todo object
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false,
      };
      this.list.push(newItem);
    }
    this.todoValue=""; // clear input box
    console.log(this.list);
  }

  deleteItem(id:number){
    this.list = this.list.filter(item => item.id !== id);
  }
}
 