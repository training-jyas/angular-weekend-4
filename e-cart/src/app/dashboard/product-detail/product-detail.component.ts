import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../shared/model/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      console.log(params);
      const id = +params['id'];
      this.product = this.productService.getProduct(id);
    });
  }

}
