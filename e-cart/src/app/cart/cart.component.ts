import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  EventEmitter,
  Output
} from '@angular/core';
import {
  Product
} from '../shared/model/product.model';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Output() productAdded = new EventEmitter<number>();
  public totalPrice = 0;

  products: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    console.log('cart component is loaded');
    this.products = this.cartService.getProducts();
    if (this.products.length) {
      this.getTotalPrice();
    }
    this.cartService.cartModified
    .subscribe((products: Product[]) => {
      console.log('product to add to the cart', products);
      if (products.length) {
        this.products = products;
        this.getTotalPrice();
        this.productAdded.emit(this.products.length);
      } else {
        this.getTotalPrice();
      }
    });
  }

  removeProduct(product: Product) {
    this.cartService.removeFromCart(product);
  }

  private isProductAdded(product: Product): boolean {
    let isAdded = false;
    this.products.forEach((prod) => {
      if (prod.id === product.id) {
        isAdded = true;
      }
    });
    return isAdded;
  }

  private getTotalPrice() {
    this.totalPrice = 0;
    this.products.forEach((p) => {
      this.totalPrice += p.price;
    });
  }
}
