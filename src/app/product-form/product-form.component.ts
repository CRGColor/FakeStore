import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product';


@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit {

  private fb = inject(FormBuilder)
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);

  productForm!: FormGroup;
  isEditMode = false;
  productId: number | null = null;

  ngOnInit(): void {
    this.productForm = this.fb.group({
    title: ['', Validators.required],
    description: ['',Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
    image: ['']
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.productId = Number(id);
      this.productService.getProductDetails(this.productId).subscribe(product => {
        this.productForm.patchValue(product);
      });
    }
  }

  onSubmit(): void {
    if (this.productForm.invalid) return;

    const productData: Product = {
      id: this.productId ?? 0,
      ...this.productForm.value,
    };

    const action$ = this.isEditMode
    ? this.productService.updateProduct(productData)
    : this.productService.addProduct(productData);

    action$.subscribe(() => this.router.navigate(['/products']));
  }

  }


