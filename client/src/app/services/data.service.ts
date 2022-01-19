import { Injectable } from '@angular/core';
import TaskInterface from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public tasks: TaskInterface[] = []

  constructor() { }
}
