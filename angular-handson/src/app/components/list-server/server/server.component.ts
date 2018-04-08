import { Component, OnInit, Input, OnChanges, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Server } from '../../server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() server: Server;
  @Input() index: number;
  @Output() serverDeleted = new EventEmitter<number>();

  constructor() { }

  ngOnChanges() {
    console.log('on changes is called');
  }

  ngOnInit() {
    console.log('on init is called');
  }

  ngOnDestroy() {
    console.log('on destroy is called');
  }

  delete(server: Server, index: number) {
    console.log(server, index);
    this.serverDeleted.emit(index);
  }

}
