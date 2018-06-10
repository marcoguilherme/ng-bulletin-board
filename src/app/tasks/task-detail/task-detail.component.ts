import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { switchMap } from 'rxjs/operators';

import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

@Component({
    selector: 'task-detail',
    templateUrl: './task-detail.component.html'
})

export class TaskDetailComponent implements OnInit {

    public task: Task;
    public alertMessage: string;
    public alertType: string;

    public constructor(
        private taskService: TaskService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit() {
        this.route.params.pipe(
            switchMap((params: Params): any =>
                this.taskService.getTask(+params['id'])
            ))
            .subscribe (
                (task: Task) => this.task = task,
                error => console.log(error)
            );
    }

    public goBack() {
        this.location.back();
    }

    public updateTask() {
        if (this.task.title) {
            this.taskService.updateTask(this.task)
                .subscribe(
                    () => {
                        this.alertMessage = 'Data updated';
                        this.alertType = 'alert alert-success';
                    },
                    error => {
                        this.alertMessage = error;
                        this.alertType = 'alert alert-danger';
                    }
                );
        } else {
            this.alertMessage = 'Title cannot be empty';
            this.alertType = 'alert alert-danger';
        }
    }
}
