import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../shared/model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Output() addProdToCart = new EventEmitter<Product>();
  @Output() detailsClicked = new EventEmitter<Product>();
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

  addToCart() {
    this.addProdToCart.emit(this.product);
  }

  showDetails() {
    this.detailsClicked.emit(this.product);
  }
}
