import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';
import { DropdownDirective } from './product/dropdown.directive';
import { RouterModule } from '@angular/router';
import { ProductNewComponent } from './product-new/product-new.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    ProductDetailComponent,
    ProductComponent,
    DropdownDirective,
    ProductNewComponent
  ],
  providers: [ ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
