import { Component } from '@angular/core';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss'
})
export class TodoPageComponent {

}
