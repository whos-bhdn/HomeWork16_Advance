import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw12',
  templateUrl: './hw12.component.html',
  styleUrls: ['./hw12.component.css']
})
export class Hw12Component implements OnInit {

  arrWords: Array<string> = [];
  newWord!: string;
  auditWord!: string;
  arrAuditWords: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

  addWord(): void {
    if (this.newWord) {
      this.arrWords.push(this.newWord);
      this.newWord = '';
      console.log(this.arrWords);
    }
  }

  resetValue(): void {
    this.arrWords = [];
    this.arrAuditWords = [];
  }

  audit(): void {
    this.arrAuditWords.push(this.auditWord);
    // console.log(this.arrAuditWords);
    if (this.arrAuditWords.length > 0) {
      let filterArray = this.arrAuditWords.filter(e => e.includes(this.newWord))
      console.log(filterArray);
      this.arrAuditWords = [];
      filterArray.forEach(e => {
        if (e === this.newWord || '') {
          this.auditWord = this.auditWord.replace(e, '*')
        }
      })

    }
  }
}
