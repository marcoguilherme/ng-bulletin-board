import { Http, Response } from '@angular/http'
import { Injectable } from '@angular/core';

import { Task } from './task.model';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';

const TASKS: Array<Task> = [
    { id: 1, title: 'Fazer tarefa 1' },
    { id: 2, title: 'Fazer tarefa 2' },
    { id: 3, title: 'Fazer tarefa 3' },
    { id: 4, title: 'Fazer tarefa 4' }
];

@Injectable()

export class TaskService {

    public constructor(private http: Http){}

    public getTasks():Observable<Task[]>{
        return this.http.get('api/tasks').pipe(
            map( (response: Response) => response.json().data as Task[] )
        )
    }

    public getImportantTasks():Promise<Task[]>{
        return Promise.resolve(TASKS.slice(0, 3));
    }

    public getTask(id: number): Promise<Task>{
        return this.getTasks()
             .then(tasks => tasks.find(task => task.id === id ))
    }
}