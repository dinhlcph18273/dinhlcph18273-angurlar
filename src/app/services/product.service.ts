import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private hhtp :HttpClient
  ) { }

  getListProduct(): Observable<IProducts[]>{
    return this.hhtp.get<IProducts[]>("http://localhost:3001/products")
  }
  getProduct(id:any): Observable<IProducts>{
    return this.hhtp.get<IProducts>(`http://localhost:3001/products/${id}`)
  }
  createProduct(product:IProducts):Observable<IProducts>{
    return this.hhtp.post<IProducts>("http://localhost:3001/products", product)
  
  }
  removeProduct(id:any){
    return this.hhtp.delete(`http://localhost:3001/products/${id}`)
  }
  editProduct(){

  }
}
