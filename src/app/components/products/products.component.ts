import { Component, Input, OnInit } from '@angular/core';
import { IProducts } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  componentName: string = "Component Products";
  products!: IProducts[]
  constructor(
    private productServices: ProductService
  ){}

  ngOnInit(): void {
    this.getProductList()
  }

  getProductList(){
     this.productServices.getListProduct().subscribe(data => {
      this.products = data      
    })
  }

  onHandleRemove(id: any) {
    const confirm = window.confirm("bạn có chắc muốn xóa")
    if(confirm){
       this.productServices.removeProduct(id).subscribe(data=> {
      this.products = this.products.filter(item => item.id !== id)
    })
    }
  }

}
