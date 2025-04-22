import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'https://fakestoreapi.com/products'

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get <Product[]>(`${this.url}`);
  }

  getProductDetails(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  addProduct(product: Product) {
    return this.http.post(`${this.url}`, product);
  }

  updateProduct(id: number, product: Product) {
    return this.http.put(`${this.url}/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
