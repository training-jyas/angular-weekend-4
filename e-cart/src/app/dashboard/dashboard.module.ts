import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, ProductDetailComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
