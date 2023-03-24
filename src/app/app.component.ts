import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Input,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @Input() fromChild = new EventEmitter<string>();
  title = 'HW-4';
  public field = '';
  public isOpenModal = false;
  public closeDsbl = false;
  public newFirstName: string = '';
  public newSecondName: string = '';
  public newNumber: string = '';

  public valueFirstName!: string;
  public valueSecondName!: string;
  public valueNumber!: string;

  constructor(private cdref: ChangeDetectorRef) {}
  ngOnInit(): void {}

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  ngOnChanges(): void {
    this.sendTask();
  }

  showModal(): void {
    this.isOpenModal = true;
  }

  closeModal(): void {
    this.isOpenModal = false;
  }

  sendTask(): void {
    if (this.newFirstName !== '') {
      this.valueFirstName = this.newFirstName;
      this.newFirstName = '';
    }

    if (this.newSecondName !== '') {
      this.valueSecondName = this.newSecondName;
      this.newSecondName = '';
    }

    if (this.newNumber !== '') {
      this.valueNumber = this.newNumber;
      this.newNumber = '';
    }
  }
}
