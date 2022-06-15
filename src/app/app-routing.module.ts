import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { PostAddUpdateComponent } from './components/post-add-update/post-add-update.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component'
import { ProductsComponent } from './components/products/products.component';
import { AddProjectComponent } from './components/project/add-project/add-project.component';
import { ListProjectComponent } from './components/project/list-project/list-project.component';
import { AdminlayoutComponent } from './pages/adminlayout/adminlayout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { 
    path: "" ,
    component: HomepageComponent 
   ,pathMatch: "full"
  },
  { 
    path: "admin",
   component: AdminlayoutComponent,
   canActivate:[AuthGuard],
   children: [
    {
      path: "",
      component: DashboardComponent 
    },
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
    },
    {
      path: "project",
      component: ListProjectComponent
    },
    {
      path: "project/add",
      component: AddProjectComponent
    }
  ]
},
{ 
  path: "products/:id"
, component: ProductDetailComponent
},
{
   path: "about",
 component: AboutComponent 
},
{
  path: "signin",
  component: SigninComponent
},
{
  path: "signup",
  component: SignupComponent
},
{
  path: "portfolio",
  loadChildren: () => 
  import("./customer/customer.module").then(
    (m) => m.CustomerModule
  )
},
{ 
  path:"**",
  component: NotFoundComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
