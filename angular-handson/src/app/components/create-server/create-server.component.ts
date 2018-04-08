import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.scss']
})
export class CreateServerComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<any>();

  name: string;
  type = '';
  status: string;

  constructor() { }

  ngOnInit() {
  }

  create() {
    console.log(this.name, this.type, this.status);
    const server = {
      name: this.name,
      type: this.type,
      status: this.status
    };
    this.serverCreated.emit(server);
  }

  reset() {
    this.name = '';
    this.type = '';
    this.status = '';
  }

}
