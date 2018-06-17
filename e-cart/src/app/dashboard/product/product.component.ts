import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../shared/model/product.model';
import { ProductService } from '../../shared/product.service';
import { CartService } from '../../shared/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private router: Router,
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  showDetails() {
    this.router.navigate(['product', this.product.id]);
  }
}
