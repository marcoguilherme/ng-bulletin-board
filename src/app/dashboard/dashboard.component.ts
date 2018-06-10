import { Component, OnInit } from '@angular/core';

import { Task } from '../tasks/shared/task.model';
import { TaskService } from '../tasks/shared/task.service';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {
    public tasks: Task[];
    public alertMessage: string;
    public alertType: string;

    public constructor(private taskSerivce: TaskService) {}

    public ngOnInit() {
        this.taskSerivce.getImportantTasks()
        .subscribe(
            response => this.tasks = response,
            error => {
                this.alertMessage = error,
                this.alertType = 'alert alert-danger';
            },
            () => console.log('Completed')
        );
    }
}
