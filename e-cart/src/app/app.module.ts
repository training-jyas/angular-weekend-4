import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CartModule } from './cart/cart.module';
import { HeaderService } from './shared/header.service';
import { ProductService } from './shared/product.service';
import { CartService } from './shared/cart.service';
import { AppRoutesModule } from './app-routes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HeaderModule,
    DashboardModule,
    CartModule,
    AppRoutesModule
  ],
  providers: [
    CartService,
    HeaderService,
    ProductService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
