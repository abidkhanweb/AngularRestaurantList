import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productID:any;
  productList:[];
  constructor(private activatedRoute:ActivatedRoute, private productService:ProductService){
    
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((response:any)=>{
      this.productID = response.id;
    });
    
    this.productService.getStarter().subscribe((response:any)=>{
      this.productList = response.filter(item=>item.id===this.productID);
    })
  }


}
