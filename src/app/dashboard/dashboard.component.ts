import { Component, OnInit } from '@angular/core';

import { Task } from '../tasks/shared/task.model';
import { TaskService } from '../tasks/shared/task.service';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {
    
    public tasks: Task[];
    public errors: string;

    public constructor(private taskSerivce: TaskService){}

    public ngOnInit(){
        this.taskSerivce.getImportantTasks()
            .then(result => this.tasks = result)
            .catch(result => this.errors = result)
    }
}