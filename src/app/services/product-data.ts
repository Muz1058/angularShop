import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductData {
  private http = inject(HttpClient);
  // Return observable, not data
  getProduct(): Observable<any> {
    return this.http.get('https://dummyjson.com/products');
  }
  getProductById(id: any) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
