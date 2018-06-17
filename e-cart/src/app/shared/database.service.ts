import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Product } from './model/product.model';
import { ProductComponent } from '../dashboard/product/product.component';

@Injectable()
export class DatabaseService {
    private url = 'https://ng-e-cart.firebaseio.com/products';
    private urlSuffix = '.json';
    constructor(private http: HttpClient) {

    }

    get() {
        return this.http.get(this.url + this.urlSuffix)
        .map((result: any) => {
            const products: Product[] = [];
            if (Object.keys(result).length) {
                for (const key in result) {
                    if (result.hasOwnProperty(key)) {
                        const product = {};
                        product['id'] = key;
                        product['name'] = result[key]['name'];
                        product['price'] = result[key]['price'];
                        product['description'] = result[key]['description'];
                        product['image'] = result[key]['image'];
                        products.push(<Product>product);
                    }
                }
            }
            return products;
        });
    }

    add(product: Product) {
        return this.http.post(this.url + this.urlSuffix, product);
    }

    update(product: Product) {
        return this.http.put(this.url + '/' + product.id + this.urlSuffix, product);
    }

    delete(product: Product) {
        return this.http.delete(this.url + '/' + product.id + this.urlSuffix);
    }
}
