import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = `http://localhost:3001/products/`
  constructor(
    private hhtp :HttpClient
  ) { }

  getListProduct(): Observable<IProducts[]>{
    return this.hhtp.get<IProducts[]>(`${this.API_URL}`)
  }
  getProduct(id:any): Observable<IProducts>{
    return this.hhtp.get<IProducts>(`${this.API_URL}/${id}`)
  }
  createProduct(product:IProducts):Observable<IProducts>{
    return this.hhtp.post<IProducts>(`${this.API_URL}`, product)
  
  }
  removeProduct(id:any):Observable<IProducts>{
    return this.hhtp.delete<IProducts>(`${this.API_URL}/${id}`)
  }
  editProduct(product:IProducts): Observable<IProducts>{
    return this.hhtp.put<IProducts>(`${this.API_URL}/${product.id}`, product)
  }
}
