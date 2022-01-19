import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import ResponseInterface from 'src/app/interfaces/response.interface';
import TaskInterface from 'src/app/interfaces/task.interface';
import { DataService } from 'src/app/services/data.service';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-taskcard',
  templateUrl: './taskcard.component.html',
  styleUrls: ['./taskcard.component.css']
})
export class TaskcardComponent implements OnInit {

  constructor(public _server: ServerService, public _data: DataService) { }

  @Input() public task: TaskInterface

  ngOnInit(): void {
  }

  changecompleted() {
    this._server.changeCompleted({ id: this.task._id, value: this.task.completed }).subscribe(
      (res: ResponseInterface) => {
        this._data.tasks = res.tasks
      }, err => {
        console.log(err)
      }
    )
  }
  deletetask() {
    this._server.deleteTask(this.task._id).subscribe(
      (res: ResponseInterface) => {
        this._data.tasks = res.tasks
      }, err => {
        console.log(err)
      }
    )
  }
}
