import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Task } from './task.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable()

export class TaskService {

    public taskUrl = 'api/tasks';

    public constructor(private http: Http) {}

    public getTasks(): Observable<Task[]> {
        return this.http.get(this.taskUrl).pipe(
            catchError(this.handleErrors),
            map( (response: Response) => response.json() as Task[] )
        );
    }

    public getImportantTasks(): Observable<Task[]> {
        return this.getTasks().pipe(
            catchError(this.handleErrors),
            map( response => response.slice(0, 3))
        );
    }

    public getTask(id: number): Observable<Task> {

        const url = `${this.taskUrl}/${id}`;

        return this.http.get(url).pipe(
            catchError(this.handleErrors),
            map((response: Response) => response.json() as Task)
        );
    }

    private handleErrors(error: Response) {
        console.log('savind error in a log file', error);
        return throwError(`status: ${error.status}, url: ${error.url}, error: ${error.statusText}`);
    }
}
