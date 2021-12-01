import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() childContent: Task[] = [];
  @Output() outputData = new EventEmitter<number>();


  newTask!: string
  isNone = false;
  isId!: number;
  editNewTask!: string;
  isNull = false;
  allCounts!: number


  currentTask: Task = new Task();

  arrTasks: Task[] = [];

  objectTasks = {
    task: this.newTask,
    status: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(id: number){
    this.childContent[id].status = !this.childContent[id].status;
  }

  editTask(id: number){
    this.isNone  = !this.isNone;
    this.isId = id;
    this.editNewTask = this.childContent[this.isId].task
  }

  deleteTask(index: number): void {
    this.childContent.splice(index, 1)
  }

  saveTask(): void{
    this.isNone = false;
    this.childContent[this.isId].task = this.editNewTask
    console.log(this.editNewTask)
  }

  updateOutputCount(){
    this.outputData.emit(this.childContent.length);
  }

}

export class Task {
  task!: string;
  status!: boolean;
}
