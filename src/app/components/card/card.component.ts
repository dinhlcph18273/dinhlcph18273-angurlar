import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  products!: IProducts[]
  constructor(
    private productSevices: ProductService
  ) { }

  ngOnInit(): void {
    this.getListProduct()
  }

  getListProduct(){
    this.productSevices.getListProduct().subscribe(data => {
      this.products = data
    })
  }

}
