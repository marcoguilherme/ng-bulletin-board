import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()

export class LearningObservablesService {

    public constructor(private http: Http){
        let observer = {
            name: "some name",
            email: "some email",

            nameAndEmail: function(){
                return this.name + " and " + this.email
            }
        }

        console.log(observer.nameAndEmail())
    }
}