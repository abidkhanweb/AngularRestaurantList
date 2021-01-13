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

  constructor(private productService:ProductService) { }

  foodCategory = "chicken";

  ngOnInit() {
    this.starters = this.productService.getStarter();
    this.chickens = this.productService.getChicken();
  }

}
