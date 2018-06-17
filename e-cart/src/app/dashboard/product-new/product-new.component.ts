import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { get } from 'lodash';
import { ProductService } from '../../shared/product.service';
import { Product } from '../../shared/model/product.model';

@Component({
    selector: 'app-product-new',
    templateUrl: './product-new.component.html',
    styleUrls: ['./product-new.component.scss']
})
export class ProductNewComponent implements OnInit {
    productForm: FormGroup;
    editMode: boolean;
    id: string;
    product: Product;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private productService: ProductService) {

    }

    ngOnInit() {
        this.route.params
            .subscribe((params: any) => {
                if (params['id']) {
                    this.id = params['id'];
                    this.editMode = true;
                } else {
                    this.editMode = false;
                }
                this.initForm();
            });
    }

    initForm() {
        let name = '';
        let price = 0;
        let description = '';
        let image = '';

        if (this.editMode) {
            this.product = this.productService.getProduct(this.id);
            name = get(this.product, 'name');
            price = get(this.product, 'price');
            description = get(this.product, 'description');
            image = get(this.product, 'image');
        }

        this.productForm = new FormGroup({
            'name': new FormControl(name, Validators.required),
            'price': new FormControl(price, Validators.required),
            'description': new FormControl(description, Validators.required),
            'image': new FormControl(image, Validators.required) 
        });
    }

    save() {
        console.log('i am save method', this.productForm);
        const product: Product = this.productForm.value;
        if (this.editMode) {
            product.id = this.id;
            this.productService.updateProduct(product);
        } else {
            this.productService.addProduct(product);
        }
        this.cancel();
    }

    reset() {
        this.productForm.reset();
    }

    cancel() {
        this.router.navigate(['/home']);
    }
}