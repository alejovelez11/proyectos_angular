import { Component, OnInit, Input } from '@angular/core';
import { Task } from "../../models/task";
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task:Task
  constructor(private taskService:TaskService) { }

  ngOnInit() {
  }
  // deleteTask(task:Task){
  //   if (confirm("Esta seguro de eliminarlo")) {
  //     this.taskService.deleteTask(task)
  //   }
  // }

}
