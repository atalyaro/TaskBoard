import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(public http: HttpClient, public _data: DataService) { }


  getUsers() {
    return this.http.get("http://localhost:1000/users")
  }

  getTasks() {
    return this.http.get("http://localhost:1000/tasks")
  }

  addTask(body) {
    return this.http.post("http://localhost:1000/tasks", body, {
      headers: { 'Content-Type': 'application/json' }
    })
  }

  changeCompleted(body) {
    return this.http.put("http://localhost:1000/tasks", body, {
      headers: { 'Content-Type': 'application/json' }
    })
  }

  deleteTask(id) {
    return this.http.delete("http://localhost:1000/tasks/" + id)
  }
}
