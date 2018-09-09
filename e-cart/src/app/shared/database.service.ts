import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Product } from './model/product.model';
import { ProductComponent } from '../dashboard/product/product.component';

@Injectable()
export class DatabaseService {
    private url = 'http://localhost:3000/product';
    constructor(private http: HttpClient) {

    }

    get() {
        return this.http.get(this.url)
        .map((result: any) => {
            const products: Product[] = [];
            if (Object.keys(result).length) {
                for (const key in result) {
                    if (result.hasOwnProperty(key)) {
                        let product = {};
                        product = result[key];
                        product['id'] = result[key]['_id'];
                        products.push(<Product>product);
                    }
                }
            }
            return products;
        });
    }

    add(product: Product) {
        return this.http.post(this.url, product);
    }

    update(product: Product) {
        return this.http.patch(this.url + '/' + product.id, product);
    }

    delete(product: Product) {
        return this.http.delete(this.url + '/' + product.id);
    }
}
