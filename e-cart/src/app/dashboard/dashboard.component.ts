import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/model/product.model';
import { ProductService } from '../shared/product.service';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productCount = 0;
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.cartService.cartModified
    .subscribe((products: Product[]) => {
      this.productCount = products.length;
    });
  }

}
