import { Component } from '@angular/core';
import { IProducts } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList: IProducts[] = [
    { id: 1, name: "product A", price: 100, status: true },
    { id: 2, name: "product B", price: 200, status: false }
  ]
  onHandleAdd(product: any) {
    console.log(product);
    this.productList.push(product)
  }
}
