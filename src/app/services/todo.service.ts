import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Todo } from '../modals/todo.modal';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private http: HttpClient = inject(HttpClient);

    getTodoList(): Observable<Todo[]> {
        return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
    }
}
