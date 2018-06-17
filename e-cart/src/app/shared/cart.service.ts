import {
  Product
} from './model/product.model';
import {
  Subject
} from 'rxjs/Subject';

export class CartService {
  public cartModified = new Subject < Product[] > ();

  private products: Product[] = [];

  constructor() {
    this.products = [];
  }

  getProducts(): Product[] {
    return this.products.slice();
  }

  addToCart(product: Product) {
    if (product) {
      this.products.push(product);
    }
    this.cartModified.next(this.products);
  }

  removeFromCart(product: Product) {
    const index = this.getItemIndex(product, this.products);
    if (product && index !== -1) {
      this.products.splice(index, 1);
      this.cartModified.next(this.products);
    }
  }

  getItemIndex(product: Product, products: Product[]): number {
    let index = -1;
    products.forEach((p, i) => {
      if (p.id === product.id) {
        index = i;
      }
    });
    return index;
  }
}
