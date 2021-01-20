import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteProductComponent } from './favorite-product/favorite-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},
  {path:'product-detail/:id', component:ProductDetailComponent},
  {path:'favorite-list', component:FavoriteProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
