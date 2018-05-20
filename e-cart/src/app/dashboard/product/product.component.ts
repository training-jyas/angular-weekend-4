import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../shared/model/product.model';
import { ProductService } from '../../shared/product.service';
import { CartService } from '../../shared/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  showDetails() {
    this.productService.showDetails(this.product);
  }
}
