import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'addtask', component: AddTaskComponent },
  { path: "", pathMatch: "full", redirectTo: "main" },
  { path: "**", redirectTo: "main" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
