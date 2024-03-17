import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Todo } from '../../modals/todo.modal';
import { TodoService } from '../../services/todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
    selector: 'app-todo-list',
    standalone: true,
    imports: [TodoItemComponent, CommonModule],
    styleUrl: './todo-list.component.scss',
    template: `
        <section class="todo-list">
            <div
                *ngFor="let todo of todoList"
                class="todo-list__item">
                <!-- TODO: render TodoItemComponent here  -->
            </div>
        </section>
    `,
})
export class TodoListComponent implements OnInit {
    private todoService: TodoService = inject(TodoService);
    public todoList: Todo[] = [];

    ngOnInit(): void {
        this.todoService.getTodoList().subscribe(response => {
            this.todoList = response;
        });
    }
}
