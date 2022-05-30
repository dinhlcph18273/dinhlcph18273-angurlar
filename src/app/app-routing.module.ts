import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { PostAddUpdateComponent } from './components/post-add-update/post-add-update.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component'
import { ProductsComponent } from './components/products/products.component';
import { AdminlayoutComponent } from './pages/adminlayout/adminlayout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: "" , component: HomepageComponent ,pathMatch: "full"},
  { path: "admin",
   component: AdminlayoutComponent,
   children: [
    { 
      path: "products",
      component: ProductsComponent
    },
    { 
      path: "products/add",
      component: AddProductComponent
    },
    { 
      path: "products/edit/:id",
      component: AddProductComponent
    },
    {
      path:"post",
       component: ListPostComponent
    },
    {
      path: "post/add",
      component: PostAddUpdateComponent
    },
    {
      path:"post/edit/:id",
      component: PostAddUpdateComponent
    }
  ]
},
{ path: "products/:id", component: ProductDetailComponent},
{ path: "about", component: AboutComponent },
{ path:"**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
