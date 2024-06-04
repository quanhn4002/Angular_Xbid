import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  API_URL = 'http://localhost:8000';
  addProduct(product: any): Observable<any> {
    return this.http.post(this.API_URL + '/addProduct', product);
  }
}
