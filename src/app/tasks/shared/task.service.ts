import { Injectable } from '@angular/core';

import { Task } from './task.model';

const TASKS: Array<Task> = [
    { id: 1, title: 'Fazer tarefa 1' },
    { id: 2, title: 'Fazer tarefa 2' },
    { id: 3, title: 'Fazer tarefa 3' },
    { id: 4, title: 'Fazer tarefa 4' }
];

@Injectable()

export class TaskService {

    public getTasks():Promise<Task[]>{
        let promise:any = new Promise((resolve, reject)=>{
            if(TASKS.length > 0){
                resolve(TASKS)
            }else{
                reject('No tasks available')
            }
        })
        return promise;
    }

    public getImportantTasks():Promise<Task[]>{
        return Promise.resolve(TASKS.slice(0, 3));
    }
}