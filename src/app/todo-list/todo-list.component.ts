import { NgFor } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  standalone: true,
  imports: [NgFor]
})
export class ToDoListComponent {
  @Input({ required: true }) list!: string[];
  @Input({ required: true }) icon!: string;
  @Output() setTaskStatus = new EventEmitter<string>();

  setStatus(task: string) {
    this.setTaskStatus.emit(task);
  }
}
