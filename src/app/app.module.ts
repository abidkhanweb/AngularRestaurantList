import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenulistService } from './service/menulist.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyConvertorComponent } from './currency-convertor/currency-convertor.component';
import {MenuListComponent} from './menulist.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConvertorComponent,
    MenuListComponent,
    SearchPipe,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MenulistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
