import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-list-server',
  templateUrl: './list-server.component.html',
  styleUrls: ['./list-server.component.scss']
})
export class ListServerComponent implements OnInit, OnChanges {
  @Input('srv') server: any;
  servers: Server[] = [{
    name: 'server-1',
    type: 'local',
    status: 'offline'
  }];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log(this.server);
    if (changes['server'] && changes['server'].currentValue) {
      this.servers.push(this.server);
    }
  }

  ngOnInit() {
    console.log(this.server);
  }

  delete(index: number) {
    this.servers.splice(index, 1);
  }
}
