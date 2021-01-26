import { Component, OnInit } from '@angular/core';
import {MenulistService} from './service/menulist.service';


@Component({
    selector: 'menulist',
    templateUrl: './menulist.component.html'

})

export class MenuListComponent implements OnInit {

    category: string = "";
    selectedNav: any;
    catName = ['Starter', 'Chicken', 'Paneer', 'Mutton', 'Egg', 'Sweet', 'Drink'];

    constructor(private _myData:MenulistService){

    }

    ngOnInit() {
        this.selectedNav = 'select value';
        this.starters = this._myData.getStarter();
        this.chickens = this._myData.getChicken();
        this.muttons = this._myData.getMutton();
        this.paneers = this._myData.getPaneer();
        this.eggs = this._myData.getEgg();
        this.sweets = this._myData.getSweet();
        this.drinks = this._myData.getDrink();
    }
    setNav(nav: any) {
        this.selectedNav = nav;
        if (this.selectedNav == "Starter") {
            this.category = "Starter";
        }
        else if (this.selectedNav == "Chicken") {
            this.category = "Chicken";
        }
        else if (this.selectedNav == "Paneer") {
            this.category = "Paneer";
        }
        else if (this.selectedNav == "Mutton") {
            this.category = "Mutton";
        }
        else if (this.selectedNav == "Egg") {
            this.category = "Egg";
        }
        else if (this.selectedNav == "Sweet") {
            this.category = "Sweet";
        }
        else if (this.selectedNav == "Drink") {
            this.category = "Drink";
        }
    }

    restName: string = "";
    filteredItem: [];
    filteredItemPrice: any = 0;
    
    // Menu list
    starters:any =  [];
    chickens:any =  [];
     muttons:any =  [];
     paneers:any =  [];
        eggs:any =  [];
      sweets:any =  [];
      drinks:any =  [];

    
    checkStarter(name:any,price:any,check:any) {
        
        for(let i=0;i<this.starters.length;i++){
            if(this.starters[i].name === name){
                this.starters[i].check=!this.starters[i].check;
                if(this.starters[i].check === true){
                    this.filteredItemPrice += parseInt(price);
                }
                else if(this.starters[i].check === false){    
                    this.filteredItemPrice -= parseInt(price);
                }
            }
        }
    }

    checkChicken(name:any,price:any,check:any) {
        
        for(let i=0;i<this.chickens.length;i++){
            if(this.chickens[i].name === name){
                this.chickens[i].check=!this.chickens[i].check;
                /*if(this.chickens[i].check === true){
                    this.filteredItemPrice += parseInt(price);
                }
                else if(this.chickens[i].check === false){    
                    this.filteredItemPrice -= parseInt(price);
                }*/
            }
        }
    }


    filteredItemMethod() {
        return this.filteredItemPrice;
    }
    
    addStarter(name, price, check) {
        return this.checkStarter(name, price, check)
    }
    addChicken(name, price, check){
        return this.checkChicken(name,price,check);
    }







    // tags = [{
    //     name: 'Empathetic',
    //     checked: true
    //   }, {
    //     name: 'Smart money',
    //     checked: true
    //   }, {
    //     name: 'Minimal help after writing check',
    //     checked: true
    //   }, {
    //     name: 'Easy term sheet',
    //     checked: true
    //   }];

    //   changeCheckbox(tags, i) {
    //     if (tags) {
    //       this.tags[i].checked = !this.tags[i].checked;
    //     }
    //   }

}