import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product';


@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);

  product: Product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    image: ''
  };

  isEditMode = false;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id) {
      this.isEditMode = true;
      this.productService.getProductDetails(id).subscribe((res) => {
        this.product = res;
      });
      }
    }

    saveProduct() {
      if(this.isEditMode) {
        this.productService.updateProduct(this.product).subscribe(() => {
          this.router.navigate(['/products']);
        })
      }
    }
  }


