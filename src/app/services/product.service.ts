import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'https://api.example.com/fakestore'

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.url}`);
  }

  getProductDetails(id: number) {
    return this.http.get(`${this.url}/${id}`);
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
