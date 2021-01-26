import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { CurrencyConvertorComponent } from './currency-convertor/currency-convertor.component';
import { MenuListComponent } from './menulist.component';
import { SearchPipe } from './pipes/search.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ViewsComponent } from './views/views.component';
import { HomeComponent } from './views/home/home.component';

import { MenulistService } from './service/menulist.service';
import { ProductService } from './service/product.service';
import { InMemoryProductDatabase } from './db/in-memory-web-api';
import { FavoriteProductComponent } from './favorite-product/favorite-product.component';



@NgModule({
  declarations: [
    AppComponent,
    CurrencyConvertorComponent,
    MenuListComponent,
    SearchPipe,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductDetailComponent,
    ViewsComponent,
    HomeComponent,
    FavoriteProductComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryProductDatabase),

  ],
  providers: [MenulistService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
