import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../shared/model/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input('prodData') product: Product;

  constructor() { }

  ngOnInit() {
  }

}
