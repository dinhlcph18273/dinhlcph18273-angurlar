import { Component, Input, OnInit } from '@angular/core';
import { IProducts } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  componentName: string = "Component Products";
  productDetail !: IProducts
  @Input() products!: IProducts[]
  constructor() { }

  ngOnInit(): void {

  }

  onHandleRemove(id: number) {
    this.products = this.products.filter(item => item.id !== id)
  }

  onHandleGetProduct(product: IProducts) {
    this.productDetail = product
    console.log(product);

  }

}
