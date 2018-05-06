import { Component } from '@angular/core';
import { Product } from './shared/model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  page = 'dashboard';
  product: Product;

  showPage(page: string) {
    this.page = page;
  }

  addToCart(product: Product) {
    this.product = product;
    console.log('product in app', this.product);
  }
}
