import { Component, OnInit } from '@angular/core';

import { Task } from './shared/task.model'
import { TaskService } from './shared/task.service';

@Component({
    selector: 'tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css'],
    providers: [
        TaskService 
    ]
})

export class TasksComponent implements OnInit {
    
    public tasks: Array<Task>;
    public selectedTask: Task;
    public errors: string;

    public constructor(private taskService: TaskService){}
    
    public ngOnInit(){
        this.taskService.getTasks()
            .then(result => this.tasks = result)
            .catch(result => this.errors = result)
    }

    public onSelect(task: Task):void{
        this.selectedTask = task;
    }
}