import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';

export const routes: Routes = [
    {
        path: 'http://localhost:4200/products',
        component: ProductListComponent
    },
    {
        path: 'http://localhost:4200/products/:id',
        component: ProductDetailComponent
    },
    {
        path: 'http://localhost:4200/new',
        component: ProductFormComponent
    },
    {
        path: 'http://localhost:4200/products/:id/edit',
        component: ProductFormComponent
    }
];
