import { Component } from '@angular/core';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';

@Component({
    selector: 'app-todo-page',
    standalone: true,
    imports: [TodoListComponent],
    template: `<app-todo-list />`,
})
export class TodoPageComponent {}
