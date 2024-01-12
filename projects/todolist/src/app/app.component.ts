<<<<<<< HEAD
import {Component} from '@angular/core';
import {TodoListComponent} from "./todo-list/todo-list.component";
=======
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
>>>>>>> b0af9fe215b9ffeeb72ba36d1c2e8da39e297360

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [TodoListComponent, TodoListComponent],
  template: `
    <div class="container">
      <todo-list></todo-list>
    </div>

  `,
  styles: [`

    :root {
      --primary: #f4511e;
    }
  `],
})
export class AppComponent {
=======
  imports: [CommonModule, RouterOutlet],
  template : `
  <h1>Hello world</h1>
  `,
  styles : []

})
export class AppComponent {
  title = 'todolist';
>>>>>>> b0af9fe215b9ffeeb72ba36d1c2e8da39e297360
}
