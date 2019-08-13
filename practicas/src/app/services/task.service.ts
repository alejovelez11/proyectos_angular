import { Injectable } from '@angular/core';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // tasks:any[] = JSON.parse(localStorage.getItem("tasks"))
  constructor() {
    // if (!localStorage.getItem("tasks")) {
    //   localStorage.setItem("tasks", JSON.stringify([]))
    // }
  }

  // addTask(task:Task){
  //     let tasks = JSON.parse(localStorage.getItem("tasks"))
  //     tasks.push(task)
  //     localStorage.setItem("tasks", JSON.stringify(tasks))
  //     this.renderTask(task)
  // }
  
  // renderTask(task){
  //   return task
  // }

  // render(){
  //   let tasks = JSON.parse(localStorage.getItem("tasks"))
  //   tasks.forEach(element => {
  //     this.renderTask(element)
  //   });
  //   return tasks
  // }

  
  // deleteTask(task:Task){
  //   let tasks = JSON.parse(localStorage.getItem("tasks"))
  //   for (let i = 0; i < tasks.length; i++) {
  //     if (task == tasks[i]) {
  //       tasks.splice(i,1) 
  //     }
  //   }
  // }
}
