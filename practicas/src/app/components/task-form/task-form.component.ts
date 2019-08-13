import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  tasks:any = {
    title:"",
    description:""
  }
  
  constructor(private taskServive:TaskService) {
  }

  ngOnInit() {
  }

  // addTask(){
  //   this.taskServive.addTask(this.tasks)
  // }

}
