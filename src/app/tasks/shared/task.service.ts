import { Http, Response } from '@angular/http'
import { Injectable } from '@angular/core';

import { Task } from './task.model';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable()

export class TaskService {

    public taskUrl = "api/tasks"

    public constructor(private http: Http){}

    public getTasks():Observable<Task[]>{
        return this.http.get(this.taskUrl).pipe(
            map( (response: Response) => response.json() as Task[] )
        )
    }

    public getImportantTasks():Observable<Task[]>{
        return this.getTasks().pipe(
            map( response => response.slice(0, 3))
        )
    }

    public getTask(id: number): Observable<Task>{

        let url = `${this.taskUrl}/${id}`;

        return this.http.get(url).pipe(
            map((response: Response)=> response.json() as Task)
        )
    }
}