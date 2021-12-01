import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public parentContent :Task[] = [];

  countTask!: number;

  childContent: Task[] = [];
  newTask!: string;

  isNull = false;
  currentTask: Task = new Task();

  arrTasks: Task[] = [];

  objectTasks = {
    task: this.newTask,
    status: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

  addNewTask(): void {
    if (this.currentTask.task != ''){
      this.isNull = true
      this.objectTasks = {
        task: this.currentTask.task,
        status: false,
      }
      this.arrTasks.push(this.objectTasks);
      this.currentTask.task = '';
      this.countTask = this.arrTasks.length;
    }

    this.parentContent = this.arrTasks;
    console.log(this.arrTasks)
  }

  getOutputCount(data: number): void {
    this.countTask = data;
  }

}

export class Task {
  task!: string;
  status!: boolean;
}
