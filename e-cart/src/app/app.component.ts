import { Component, OnInit } from '@angular/core';
import { Product } from './shared/model/product.model';
import { HeaderService } from './shared/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  page = 'dashboard';
  product: Product;
  prodsInTheCart = 0;

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.menuClicked
    .subscribe((menuSelected: string) => {
      this.page = menuSelected;
    });
  }

  showPage(page: string) {
    this.page = page;
  }

  addToCart(product: Product) {
    this.product = product;
    console.log('product in app', this.product);
  }

  updateProdCount(productCount: number) {
    this.prodsInTheCart = productCount;
  }
}
