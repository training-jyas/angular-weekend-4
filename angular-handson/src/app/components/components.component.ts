import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComponentsComponent implements OnInit {
  server: Server;

  constructor() { }

  ngOnInit() {
  }

  getServerData(server: any) {
    console.log(server);
    this.server = server;
  }
}
