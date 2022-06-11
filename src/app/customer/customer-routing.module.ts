import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePortfolioComponent } from './home-portfolio/home-portfolio.component';
import { WorkDetailComponent } from './work-detail/work-detail.component';
import { WorkPageComponent } from './work-page/work-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomePortfolioComponent,
    children: [
      {
        path: "",
        component: HomePageComponent
      },
      {
        path: "blog",
        component: BlogPageComponent
      },
      {
        path: "work",
        component: WorkPageComponent
      },
      {
        path: "work-detail",
        component: WorkDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
