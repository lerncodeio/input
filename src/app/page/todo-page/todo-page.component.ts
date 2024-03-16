import { Component } from '@angular/core';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';

@Component({
    selector: 'app-todo-page',
    standalone: true,
    imports: [TodoItemComponent],
    template: `<app-todo-item />`,
})
export class TodoPageComponent {}
