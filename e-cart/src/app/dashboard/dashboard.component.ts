import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products = [
    new Product('mobile', 15000, 'a nice mobile', 1, 'glyphicon glyphicon-th', true, false),
    new Product('laptop', 45000, 'a nice laptop', 2, 'glyphicon glyphicon-asterisk', true, false),
    new Product('bike', 90000, 'a nice bike', 3, 'glyphicon glyphicon-tags', true, false),
    new Product('car', 450000, 'a nice car', 4, 'glyphicon glyphicon-road', true, false),
    new Product('speaker', 5000, 'a nice speaker', 5, 'glyphicon glyphicon-volume-up', true, false),
    new Product('headset', 3000, 'a nice headset', 6, 'glyphicon glyphicon-headphones', true, false)
  ];
  product: Product;

  constructor() { }

  ngOnInit() {
  }

  showDetails(product: Product) {
    this.product = product;
  }

}
