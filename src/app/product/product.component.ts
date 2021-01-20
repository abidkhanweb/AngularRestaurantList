import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private productService:ProductService, private router:Router) { }

  foodCategory = "starter";

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

  

  goToProduct(id){
    this.router.navigateByUrl('/product-detail/'+id);  
  }

  deleteProduct(id){
    for(let i=0;i<this.starters.length;i++){
        if(this.starters[i].id===id){
          this.starters.splice(i,1);
        }

    }
  }

}
