import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './dashboard/product-detail/product-detail.component';

const routes: Routes = [{
    path: '', redirectTo: 'home', pathMatch: 'full'
}, {
    path: 'home', component: DashboardComponent, children: []
}, {
    path: 'cart', component: CartComponent
}, {
    path: 'product/:id', component: ProductDetailComponent
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutesModule {

}
