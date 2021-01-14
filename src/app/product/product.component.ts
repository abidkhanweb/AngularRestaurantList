import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {

  starters=[];
  chickens=[];
  paneers=[];

  constructor(private productService:ProductService) { }

  foodCategory = "chicken";

  ngOnInit() {

    this.productService.getStarter().subscribe((data:any)=>{
      this.starters = data;
    });

    this.productService.getChicken().subscribe((data:any)=>{
      this.chickens = data;
    });

    this.productService.getPaneer().subscribe((data:any)=>{
      this.paneers = data;
    })










  }

}
