import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output
} from '@angular/core';
import {
  Product
} from '../shared/model/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnChanges {
  @Input() product: Product;
  @Input() page: string;
  @Output() productAdded = new EventEmitter<number>();

  products: Product[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    if (changes['product'] && changes['product']['currentValue']) {
      const productToAdd = changes['product']['currentValue'];
      if (!this.isProductAdded(productToAdd)) {
        this.products.push(productToAdd);
        this.productAdded.emit(this.products.length);
      }
    }
  }

  ngOnInit() {}

  private isProductAdded(product: Product): boolean {
    let isAdded = false;
    this.products.forEach((prod) => {
      if (prod.id === product.id) {
        isAdded = true;
      }
    });
    return isAdded;
  }
}
