import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component'
import { ProductsComponent } from './components/products/products.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: "" , component: HomepageComponent },
  { path: "product", component: ProductsComponent},
  { path: "product/add", component: AddProductComponent},
  { path: "product/edit/:id",component: AddProductComponent},
  { path: "about", component: AboutComponent },
  { path: "product/:id", component: ProductDetailComponent},
  { path:"**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
