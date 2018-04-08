import { Component, OnInit, Output, EventEmitter, TemplateRef, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-create-server-template',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.scss']
})
export class CreateServerTemplateComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<any>();
  @ViewChild('nameInput') nameElem: ElementRef;
  @ViewChild('typeInput') typeElem: ElementRef;

  status: string;

  constructor() { }

  ngOnInit() {
  }

  create() {
    console.log(this.nameElem, this.typeElem);
    const server = {
      name: this.nameElem.nativeElement.value,
      type: this.typeElem.nativeElement.value,
      status: this.status
    };
    this.serverCreated.emit(server);
  }

  reset() {
    this.nameElem.nativeElement.value = '';
    this.typeElem.nativeElement.value = '';
    this.status = '';
  }

}
