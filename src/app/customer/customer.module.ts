import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { HomePortfolioComponent } from './home-portfolio/home-portfolio.component';
import { HeaderPortfolioComponent } from './header-portfolio/header-portfolio.component';
import { FooterPortfolioComponent } from './footer-portfolio/footer-portfolio.component';
import { BannerPortfolioComponent } from './banner-portfolio/banner-portfolio.component';
import { MainPortfolioComponent } from './main-portfolio/main-portfolio.component';
import { FeaturePortfolioComponent } from './feature-portfolio/feature-portfolio.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WorkPageComponent } from './work-page/work-page.component';
import { WorkDetailComponent } from './work-detail/work-detail.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    HomePortfolioComponent,
    HeaderPortfolioComponent,
    FooterPortfolioComponent,
    BannerPortfolioComponent,
    MainPortfolioComponent,
    FeaturePortfolioComponent,
    BlogPageComponent,
    HomePageComponent,
    WorkPageComponent,
    WorkDetailComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NzIconModule
  ]
})
export class CustomerModule { }
