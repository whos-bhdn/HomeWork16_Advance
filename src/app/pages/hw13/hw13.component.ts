import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw13',
  templateUrl: './hw13.component.html',
  styleUrls: ['./hw13.component.css']
})
export class Hw13Component implements OnInit {

  currentUser: UserModel = new UserModel();
  arrUsers: UserModel[] = [];

  isEdit = false;
  editIndex!: number;

  constructor() { }

  ngOnInit(): void {
  }

  addUser(): void {
    if (this.currentUser.name && this.currentUser.email && this.currentUser.password) {
      let user = {
        name: this.currentUser.name,
        password: this.currentUser.password,
        email: this.currentUser.email
      }
      this.arrUsers.push(user);
      this.currentUser.name = '';
      this.currentUser.email = '';
      this.currentUser.password = '';
    }
  }

  deleteUser(index: number): void {
    this.arrUsers.splice(index, 1);
  }

  editUser(index: number): void {
    this.currentUser.name = this.arrUsers[index].name;
    this.currentUser.email = this.arrUsers[index].email;
    this.currentUser.password = this.arrUsers[index].password;
    this.editIndex = index;
    this.isEdit = true;
  }

  saveUser(){
    this.arrUsers[this.editIndex] = this.currentUser;
    this.isEdit = false;
  }

}

export class UserModel {
  name!: string;
  password!: string;
  email!: string

}

