import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/model/product.model';
import { ProductService } from '../shared/product.service';
import { CartService } from '../shared/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productCount = 0;
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit() {
    // console.log(this.route.snapshot.data);
    // this.productCount = this.route.snapshot.data.productCount;
    this.productService.getProducts();
    this.cartService.cartModified
    .subscribe((products: Product[]) => {
      this.productCount = products.length;
    });
    this.productService.productsModified
    .subscribe((products: Product[]) => {
      console.log(products);
      this.products = products;
    });
  }

}
