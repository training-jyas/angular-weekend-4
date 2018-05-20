import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../shared/model/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() productCount: number;
  isDetailVisible = false;
  products: Product[] = [];
  product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.productService.detailsClicked
    .subscribe((product: Product) => {
      this.product = product;
      this.isDetailVisible = true;
    });
  }

  goBack() {
    this.isDetailVisible = false;
  }

}
