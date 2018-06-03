import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HeaderService } from '../shared/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  constructor(private headerService: HeaderService) { 
    console.log('header service in header component', this.headerService);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes in header object', changes);
  }

  ngOnInit() {
  }

}
