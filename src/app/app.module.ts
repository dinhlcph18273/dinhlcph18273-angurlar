import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeaderComponent } from './components/custom/header/header.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { BannerComponent } from './components/custom/banner/banner.component';
import { AdminlayoutComponent } from './pages/adminlayout/adminlayout.component';
import { CategoryComponent } from './components/custom/category/category.component';
registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    ProductDetailComponent,
    AddProductComponent,
    HomepageComponent,
    NotFoundComponent,
    HeaderComponent,
    BannerComponent,
    AdminlayoutComponent,
    ProductsComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NzPageHeaderModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
