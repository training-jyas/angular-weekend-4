import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuClicked = new EventEmitter<string>();
  page = 'dashboard';

  constructor() { }

  ngOnInit() {
  }

  select(page) {
    this.page = page;
    this.menuClicked.emit(page);
  }

}
