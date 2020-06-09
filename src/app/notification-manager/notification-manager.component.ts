import { Component } from '@angular/core';

import { HomeTaskListService } from './home-task-list/home-task-list.service';
import { WorkTaskListService } from './work-task-list/work-task-list.service';

@Component({
  selector: 'notification-manager',
  templateUrl: './notification-manager.component.html'
})
export class NotificationManagerComponent {
  constructor(
    private workTaskListService: WorkTaskListService,
    private homeTaskListService: HomeTaskListService
  ) {}

  completeAll() {
    this.homeTaskListService.completeAll();
    this.workTaskListService.completeAll();
  }
}
