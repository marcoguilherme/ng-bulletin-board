import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { switchMap } from 'rxjs/operators';

import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

@Component({
    selector: 'task-detail',
    templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit{

    public task: Task;

    public constructor(
        private taskService: TaskService,
        private route: ActivatedRoute,
    ){}

    ngOnInit(){
        this.route.params.pipe(
            switchMap((params: Params):any => 
                this.taskService.getTask(+params['id'])
            ))
            .subscribe( (task: Task) => this.task = task )
    }
}