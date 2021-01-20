import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  serverUrl = "http://localhost:4200/api/";
  starter=[];
  paneer=[];
  chicken=[];
  mutton=[];
  egg=[];
  dessert=[];
  drink=[];


  constructor(private http:HttpClient) { 
    this.starter = [
      {id:'1',name:'Starter 1', src:"../assets/res-1.jpg", description:'This is description', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100'},
      {id:'2',name:'Starter 2', src:"../assets/res-1.jpg", description:'This is description', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100'},
      {id:'3',name:'Starter 3', src:"../assets/res-1.jpg", description:'This is description', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100'},
      {id:'4',name:'Starter 4', src:"../assets/res-1.jpg", description:'This is description', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100'},
      {id:'5',name:'Starter 5', src:"../assets/res-1.jpg", description:'This is description', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100'},
    ];
    
    this.chicken = [
      {id:'1',name:'Chicken 1',src:"../assets/res-2.jpg", description:'This is description', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230'},
      {id:'2',name:'Chicken 2',src:"../assets/res-2.jpg", description:'This is description', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230'},
      {id:'3',name:'Chicken 3',src:"../assets/res-2.jpg", description:'This is description', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230'},
      {id:'4',name:'Chicken 4',src:"../assets/res-2.jpg", description:'This is description', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230'},
      {id:'5',name:'Chicken 5',src:"../assets/res-2.jpg", description:'This is description', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230'},
    ];
  }

  getStarter(){
    return this.http.get(this.serverUrl+'starter');
  }
  getChicken(){
    return this.http.get(this.serverUrl+'chicken');
  }
  getPaneer(){
    return this.http.get(this.serverUrl+'paneer');
  }
}
