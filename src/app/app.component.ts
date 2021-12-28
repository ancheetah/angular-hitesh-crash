import { Component } from '@angular/core';
import { Todo } from './todo';
@Component({
  selector: 'app-root', // where the component will be injected into index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Todo';

  todoValue: string = "";
  list: Todo[] = [];

  ngOnInit(){ // angular lifecyle method
    this.todoValue = ""; 
    this.list = [];
  }

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
 