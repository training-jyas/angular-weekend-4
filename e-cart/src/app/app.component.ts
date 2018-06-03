import { Component, OnInit } from '@angular/core';
import { Product } from './shared/model/product.model';
import { HeaderService } from './shared/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
