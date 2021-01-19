import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productID;
  constructor(private activatedRoute:ActivatedRoute){
    
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((response:any)=>{
      this.productID = response.id;
    });
  }

}
