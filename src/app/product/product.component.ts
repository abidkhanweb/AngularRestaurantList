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
  newArray=[{id:'5',name:'Pani Puri', src:"~/assets/starter/pani-puri.jpg",  description:'Butter, cream, honey, salty cottage cheese, white cheese.', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100'}];

  constructor(private productService:ProductService, private router:Router) { }

  foodCategory = "starter";
  favoriteList=[];

  ngOnInit() {

    this.productService.getStarter().subscribe((data:any)=>{
      this.starters = data;
    });

    this.productService.getChicken().subscribe((data:any)=>{
      this.chickens = data;
    });

    this.productService.getPaneer().subscribe((data:any)=>{
      this.paneers = data;
    });

    this.productService.getFavoriteList().subscribe((data:any)=>{
      this.paneers = data;
    })


  }

  

  goToProduct(id){
    this.router.navigateByUrl('/product-detail/'+id);  
  }

  addProduct(){
    this.starters.push(this.newArray);
  }

  deleteProduct(id){
    for(let i=0;i<this.starters.length;i++){
        if(this.starters[i].id===id){
          this.starters.splice(i,1);
        }
    }   
  }

  addFavoriteList(id){
    for(let i=0;i<this.starters.length;i++){
        if(this.starters[i].id===id){
          this.favoriteList.push(i);
        }
    }   
  }

  

}
