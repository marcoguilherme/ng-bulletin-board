import { Component, OnInit } from '@angular/core';

import { Task } from './shared/task.model';
import { TaskService } from './shared/task.service';

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
    public tasks: Array<Task>;
    public selectedTask: Task;
    public alertMessage: string;
    public alertType: string;


    public constructor(private taskService: TaskService) {}
    public ngOnInit() {
        this.taskService.getTasks()
            .subscribe(
                tasks => this.tasks = tasks,
                error => {
                    this.alertMessage = error.statusText;
                    this.alertType = 'alert alert-danger';
                });
    }

    public onSelect(task: Task): void {
        this.selectedTask = task;
    }
}
