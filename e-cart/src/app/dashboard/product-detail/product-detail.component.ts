import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/model/product.model';
import { ProductService } from '../../shared/product.service';
import { CartService } from '../../shared/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      console.log(params);
      const id = params['id'];
      this.product = this.productService.getProduct(id);
    });
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  editProduct() {
    this.router.navigate(['/', 'product', this.product.id, 'edit']);
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product);
    this.router.navigate(['/', 'home']);
  }

}
