import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products = [
    new Product('mobile', 15000, 'a nice mobile', 1, 'glyphicon glyphicon-th', true, false),
    new Product('laptop', 45000, 'a nice laptop', 2, 'glyphicon glyphicon-asterisk', true, false)
  ];

  constructor() { }

  ngOnInit() {
  }

}
