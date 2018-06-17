import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CurrencyPipe } from '../shared/currency.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CartComponent,
    CurrencyPipe
  ],
  providers: [ ],
  exports: [CartComponent]
})
export class CartModule { }
