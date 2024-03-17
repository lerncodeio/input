import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-todo-item',
    standalone: true,
    imports: [CommonModule],
    template: `<div>
        <!-- TODO: display todo name here  -->
    </div>`,
})
export class TodoItemComponent {
    // TODO: add input property to receive todo
}
