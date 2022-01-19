import { Component, OnInit } from '@angular/core';
import ResponseInterface from 'src/app/interfaces/response.interface';
import { DataService } from 'src/app/services/data.service';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    public _server: ServerService,
    public _data: DataService
  ) { }

  ngOnInit(): void {
    this._server.getTasks().subscribe(
      (res: ResponseInterface) => {
        this._data.tasks = res.tasks
      }, err =>
      console.log(err)
    )
  }
}

