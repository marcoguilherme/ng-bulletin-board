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

    public taskUrl = "api/tasks"

    public constructor(private http: Http){}

    public getTasks():Observable<Task[]>{
        return this.http.get(this.taskUrl).pipe(
            map( (response: Response) => response.json() as Task[] )
        )
    }

    public getImportantTasks():Promise<Task[]>{
        return Promise.resolve(TASKS.slice(0, 3));
    }

    public getTask(id: number): Observable<Task>{

        let url = `${this.taskUrl}/${id}`;

        return this.http.get(url).pipe(
            map((response: Response)=> response.json() as Task)
        )
    }
}