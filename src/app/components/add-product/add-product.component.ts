import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProducts } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output() createProduct = new EventEmitter<{ name: string, price: number }>();
  product: { name: string, price: number,status: boolean } = {
    name: "",
    price: 0,
    status: true
  }
  productList!: IProducts
  constructor(
    private productServices: ProductService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.productServices.createProduct(this.product).subscribe(data => {
      
    })
  }
}
