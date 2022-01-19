import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ResponseInterface from 'src/app/interfaces/response.interface';
import UserInterface from 'src/app/interfaces/user.interface';
import { DataService } from 'src/app/services/data.service';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(public _server: ServerService, private _fb: FormBuilder, public _data: DataService) { }

  public users: UserInterface[] = []
  public myForm: FormGroup

  ngOnInit(): void {
    this._server.getUsers().subscribe(
      (res: ResponseInterface) => {
        this.users = res.users
      }, err =>
      console.log(err)
    )

    this.myForm = this._fb.group({
      desc: ["", Validators.required],
      user: ["", Validators.required]
    })
  }

  handleSubmit() {
    this._server.addTask(this.myForm.value).subscribe(
      (res: ResponseInterface) => {
        this._data.tasks = res.tasks
      }, err => {
        console.log(err)
      }
    )
  }


}
