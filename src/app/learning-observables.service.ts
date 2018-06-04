import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()

export class LearningObservablesService {

    public constructor(private http: Http){
        let observer = {
            next: newData => 
               console.log("Next method invoked and recieved", newData),
            error: errorData =>
                console.log("error method invoked and recieved: ", errorData),
            complete: () =>console.log("complete  method invoked and finished"),
        };

        //Creating observervable object setting a observer at parameter
        this.http.get("api/tasks").pipe(
            catchError( this.handleErrors )
        ).subscribe( observer );
    }

    public handleErrors(error: Response){
        return Observable.throw(error)
    }
}