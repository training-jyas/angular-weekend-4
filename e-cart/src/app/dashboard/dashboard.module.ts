import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { DropdownDirective } from './product/dropdown.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashboardComponent, ProductDetailComponent, ProductComponent,
    DropdownDirective
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
