import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  private productService = inject(ProductService);
  private http = inject(HttpClient);

  ngOnInit(): void {
    this.productService.getProducts()
    
  }
}
