import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/iuser';

@Component({
  selector: 'app-hw15',
  templateUrl: './hw15.component.html',
  styleUrls: ['./hw15.component.css']
})
export class Hw15Component implements OnInit {

  modalStatus = true;
  newFirstName!: string;
  newLastName!: string;
  newPhoneNumber!: string;
  isDisabled!: boolean;
  newField!: string;
  createOrSave!: boolean;
  isId!: number




  arrUsers: IUser[] = [
    {
      name: 'Alejandro',
      lastname: 'Del RioA lbrechet',
      phone: "380633333333",
    },
    {
      name: 'Ira',
      lastname: 'Tytar',
      phone: "380636666666"
    },
    {
      name: 'Petro',
      lastname: 'Petriv',
      phone: "380631222222"
    },
    {
      name: 'Petya',
      lastname: 'Zhuk',
      phone: "3806311111111"
    },
    {
      name: 'Sofia',
      lastname: 'Zhuk',
      phone: "380637777777"
    },
    {
      name: 'Sofia',
      lastname: 'Zhuk',
      phone: "38063777756"
    },
  ];

  currentUser: IUser = {
    name: this.newFirstName,
    lastname: this.newLastName,
    phone: this.newPhoneNumber
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeModalStatus(): void{
    this.modalStatus = false
    this.createOrSave = false;
  }

  changeModalStatusSpan(): void{
    this.modalStatus = !this.modalStatus
  }



  createUser(): void{
    if (this.currentUser.name && this.currentUser.lastname && this.currentUser.phone){
      this.arrUsers.push(this.currentUser);
      console.log(this.currentUser)
      console.log(this.arrUsers)
      this.isDisabled = false
    }
    this.modalStatus = !this.modalStatus
  }

  reverse(): void{
    this.arrUsers.reverse();
  }

  sort(): void{
    this.arrUsers.sort(function (a, b){
      if (a.phone > b.phone) {
        return 1;
      }
      if (a.phone < b.phone) {
        return -1;
      }
      return 0
    })
  }

  sortName(): void{
    this.arrUsers.sort(function (a, b){
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0
    })
  }

  sortLastName(): void{
    this.arrUsers.sort(function (a, b){
      if (a.lastname > b.lastname) {
        return 1;
      }
      if (a.lastname < b.lastname) {
        return -1;
      }
      return 0
    })
  }


  deleteUser(i: number): void{
    this.arrUsers.splice(i, 1)
  }

  editUser(id: number): void{
    this.createOrSave = true;
    this.modalStatus = false
    this.isId = id;
    this.currentUser.name = this.arrUsers[this.isId].name
    this.currentUser.lastname = this.arrUsers[this.isId].lastname
    this.currentUser.phone = this.arrUsers[this.isId].phone
  }

  saveUser(): void{
    this.arrUsers[this.isId].name = this.currentUser.name
    this.arrUsers[this.isId].lastname = this.currentUser.lastname
    this.arrUsers[this.isId].phone = this.currentUser.phone
    console.log(this.arrUsers)
    this.modalStatus = !this.modalStatus;
  }

}
