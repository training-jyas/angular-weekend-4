import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartComponent],
  providers: [ ],
  exports: [CartComponent]
})
export class CartModule { }
