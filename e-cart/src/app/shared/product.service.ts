import { Injectable } from '@angular/core';
import {
  Product
} from './model/product.model';
import {
  Subject
} from 'rxjs/Subject';
import { CartService } from './cart.service';
import { DatabaseService } from './database.service';

@Injectable()
export class ProductService {
  public productsModified = new Subject < Product[] > ();

  private products: Product[] = [];

  constructor(
    private dbService: DatabaseService,
    private cartService: CartService
  ) { }

  getProduct(id: string): Product {
    return this.products.find((product) => {
      return product.id === id;
    });
  }

  getProducts(): void {
    this.dbService.get()
      .subscribe((products: any) => {
        console.log('something from get', products);
        this.products = products;
        this.productsModified.next(this.products);
      });
  }

  addProduct(product: Product) {
    this.dbService.add(product)
      .subscribe((result: any) => {
        console.log('result after save', result);
        this.getProducts();
      });
  }

  updateProduct(product: Product) {
    this.dbService.update(product)
      .subscribe((result: any) => {
        console.log('result after update', result);
        this.getProducts();
      });
  }

  deleteProduct(product: Product) {
    this.dbService.delete(product)
      .subscribe((result: any) => {
        console.log('result after delete', result);
        this.getProducts();
      });
  }
}
