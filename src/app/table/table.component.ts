import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public phoneBookArr: IphoneBookArr[] = [
    { firstName: 'Petya', lastName: 'Zhuk', number: 631111111 },
    { firstName: 'Petro', lastName: 'Petriv', number: 631222222 },
    {
      firstName: 'Alejandro',
      lastName: 'Del Rio Albrechet',
      number: 633333333,
    },
    { firstName: 'Vasylyna', lastName: 'Vrublevska', number: 635555555 },
    { firstName: 'Ira', lastName: 'Tytar', number: 636666666 },
    { firstName: 'Sofia', lastName: 'Zhuk', number: 977777777 },
  ];

  @Input() firstName!: string;
  @Input() secondName!: string;
  @Input() number!: string;
  @Input() fieldValue!: string;

  public changeAsc!: boolean;
  public taskIndex!: number;
  public editStatus = false;
  public type: string = '';
  public colonValue: string = '';
  public newFirstName: string = '';
  public newSecondName: string = '';
  public newNumber: string = '';
  public isOpenModal = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.addTask();
  }

  changeSort(
    changeAsc: boolean,
    colonValue: string,
    input: HTMLSpanElement
  ): void {
    if (!this.changeAsc) this.changeAsc = false;
    this.changeAsc = !this.changeAsc;
    if (this.changeAsc === false) this.type = 'asc';
    else this.type = 'desc';
    this.colonValue = colonValue;

    if (this.colonValue === 'firstName' && this.type === 'desc') {
      input.textContent = '▲';
    }
    if (this.colonValue === 'firstName' && this.type === 'asc') {
      input.textContent = '▼';
    }

    if (this.colonValue === 'lastName' && this.type === 'desc') {
      input.textContent = '▲';
    }
    if (this.colonValue === 'lastName' && this.type === 'asc') {
      input.textContent = '▼';
    }

    if (this.colonValue === 'number' && this.type === 'desc') {
      input.textContent = '▲';
    }
    if (this.colonValue === 'number' && this.type === 'asc') {
      input.textContent = '▼';
    }
  }

  deleteText(input1: HTMLSpanElement, input2: HTMLSpanElement) {
    input1.textContent = '';
    input2.textContent = '';
  }

  deleteTask(index: number): void {
    this.phoneBookArr.splice(index, 1);
  }

  addTask(): void {
    if (this.firstName != '' && this.firstName != undefined) {
      let num = Number(this.number);
      if (!Number.isNaN(num)) {
        this.phoneBookArr.unshift({
          firstName: this.firstName,
          lastName: this.secondName,
          number: num,
        });
      }
    }

    this.firstName = '';
    this.secondName = '';
    this.number = '';
  }

  editTask(index: number): void {
    this.newFirstName = this.phoneBookArr[index].firstName;
    this.newSecondName = this.phoneBookArr[index].lastName;
    this.newNumber = '0' + this.phoneBookArr[index].number.toString();
    this.taskIndex = index;

    this.showModal();
  }

  saveEditTask(): void {
    let num = Number(this.newNumber);

    this.phoneBookArr[this.taskIndex].firstName = this.newFirstName;
    this.newFirstName = '';

    this.phoneBookArr[this.taskIndex].lastName = this.newSecondName;
    this.newSecondName = '';

    this.phoneBookArr[this.taskIndex].number = num;
    this.newNumber = '';

    this.closeModal();
  }

  showModal(): void {
    this.isOpenModal = true;
  }

  closeModal(): void {
    this.isOpenModal = false;
  }
}

export interface IphoneBookArr {
  firstName: string;
  lastName: string;
  number: number;
}
