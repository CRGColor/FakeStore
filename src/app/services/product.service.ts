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

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.url}`, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
