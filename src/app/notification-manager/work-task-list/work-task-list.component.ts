import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { WorkTaskListService } from './work-task-list.service';
/*
  Components now pass and receive information between itself
  and services
*/
@Component({
  selector: 'work-task-list',
  templateUrl: './work-task-list.component.html'
})
export class WorkTaskListComponent {
  todo: Observable<string[]>;
  done: Observable<string[]>;

  checkbox = 'check_box';
  outline = 'check_box_outline_blank';

  constructor(private workTaskListService: WorkTaskListService) {
    this.done = workTaskListService.done;
    this.todo = workTaskListService.todo;
  }

  setStatus(task: string, complete: boolean) {
    this.workTaskListService.setTaskStatus(task, complete);
  }
}
