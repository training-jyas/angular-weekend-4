import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  @Output() menuClicked = new EventEmitter<string>();
  page = 'dashboard';

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes in header object', changes);
  }

  ngOnInit() {
  }

  select(page) {
    this.page = page;
    this.menuClicked.emit(page);
  }

}
