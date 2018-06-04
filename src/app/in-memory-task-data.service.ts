import { Injectable } from '@angular/core'

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()

export class InMemoryTaskDataService implements InMemoryDbService {

    public createDb(){
        let tasks = [
            { id: 1, title: 'Create a new project' },
            { id: 2, title: 'Create a new profile on linkedin' },
            { id: 3, title: 'Study abou IBM Watson' },
            { id: 4, title: 'Study about machine learning' },
            { id: 5, title: 'Study about design pattern' },
        ];
        return { tasks };
    }

}