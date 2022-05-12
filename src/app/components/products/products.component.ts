import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  componentName: string = "Component Products";
  productName: string = ""
  isStatus: boolean = false
  productList: IProducts[] = [
    { id: 1, name: "product A", price: 100, status: true },
    { id: 2, name: "product B", price: 200, status: false }

  ]
  constructor() { }

  ngOnInit(): void {

  }
  onHandleClick() {
    this.isStatus = !this.isStatus
  }

  onHandleRemove(id: number) {
    this.productList = this.productList.filter(item => item.id !== id)
  }


}
