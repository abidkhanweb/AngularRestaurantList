import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  starter=[];
  paneer=[];
  chicken=[];
  mutton=[];
  egg=[];
  dessert=[];
  drink=[];

  constructor() { 
    this.starter = [
      {name:'Starter 1',src:"../assets/res-1.jpg",  description:'This is description', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100'},
      {name:'Starter 1',src:"../assets/res-1.jpg",  description:'This is description', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100'},
      {name:'Starter 1',src:"../assets/res-1.jpg",  description:'This is description', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100'},
      {name:'Starter 1',src:"../assets/res-1.jpg",  description:'This is description', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100'},
      {name:'Starter 1',src:"../assets/res-1.jpg",  description:'This is description', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100'},
    ];
    
    this.chicken = [
      {name:'Chicken 1',src:"../assets/res-2.jpg",  description:'This is description', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230'},
      {name:'Chicken 1',src:"../assets/res-2.jpg",  description:'This is description', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230'},
      {name:'Chicken 1',src:"../assets/res-2.jpg",  description:'This is description', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230'},
      {name:'Chicken 1',src:"../assets/res-2.jpg",  description:'This is description', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230'},
      {name:'Chicken 1',src:"../assets/res-2.jpg",  description:'This is description', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230'},
    ];
  }

  getStarter(){
    return this.starter;
  }
  getChicken(){
    return this.chicken;
  }
}
