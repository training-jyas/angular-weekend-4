import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './dashboard/product-detail/product-detail.component';
import { ProductNewComponent } from './dashboard/product-new/product-new.component';
import { ProductService } from './shared/product.service';

const routes: Routes = [{
    path: '', redirectTo: 'home', pathMatch: 'full'
}, {
    path: 'home',
    component: DashboardComponent//,
    // resolve: {
    //     productCount: 'productCountResolver'
    // }
}, {
    path: 'cart', component: CartComponent
}, {
    path: 'product/new', component: ProductNewComponent
}, {
    path: 'product/:id', component: ProductDetailComponent
}, {
    path: 'product/:id/edit', component: ProductNewComponent
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ]//,
    // providers: [
    //     ProductService,
    //     {
    //         provide: 'productCountResolver',
    //         useValue: (productService: ProductService) => {
    //             return productService.getProducts().length;
    //         }
    //     }
    // ]
})
export class AppRoutesModule {

}
