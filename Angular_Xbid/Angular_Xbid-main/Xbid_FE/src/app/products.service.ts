import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  API_URL = 'http://localhost:8000';
  addProduct(data: any): Observable<any> {
    return this.http.post(`${this.API_URL}/addProduct`, data);
  }
  addCategory = (data: any): Observable<any> => {
    return this.http.post(`${this.API_URL}/addCate`, data);
  };
  getProducts(): Observable<any> {
    return this.http.get(`${this.API_URL}/products`);
  }
  getCategories(): Observable<any> {
    return this.http.get(`${this.API_URL}/categorys`);
  }
  getProductById = (id: string): Observable<any> => {
    return this.http.get(`${this.API_URL}/products/${id}`);
  };
}
