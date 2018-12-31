import {Component,OnInit} from '@angular/core';


@Component({
    selector:'menulist',
    templateUrl:'./menulist.component.html'
    
})

export class MenuListComponent implements OnInit{

    category: string = "";
    selectedNav: any;
    catName = ['Starter', 'Chicken', 'Paneer', 'Mutton', 'Egg', 'Sweet', 'Drink'];
    
    ngOnInit() {
        this.selectedNav = 'select value';
		console.log(this.selectedNav);
    }
    setNav(nav:any){
        this.selectedNav = nav;
		console.log(this.selectedNav);
        if(this.selectedNav == "Starter"){
            this.category = "Starter";
        }
        else if(this.selectedNav == "Chicken"){
            this.category = "Chicken";
        }
        else if(this.selectedNav == "Paneer"){
            this.category = "Paneer";
        }
        else if(this.selectedNav == "Mutton"){
            this.category = "Mutton";
        }
        else if(this.selectedNav == "Egg"){
            this.category = "Egg";
        }
        else if(this.selectedNav == "Sweet"){
            this.category = "Sweet";
        }
        else if(this.selectedNav == "Drink"){
            this.category = "Drink";
        }
    }

    restName:string = "Menu List";
    filteredItem:[];
    

   
    starters  = [
       {name:'starter1', 'price':300.00, check:false},
       {name:'starter2', 'price':150.00, check:false},
       {name:'starter3', 'price':300.00, check:false},
       {name:'starter4', 'price':175.00, check:false},
       {name:'starter5', 'price':500.00, check:false},
       {name:'starter6', 'price':150.00, check:false},
       {name:'starter7', 'price':600.00, check:false},
       {name:'starter8', 'price':475.00, check:false},
       {name:'starter9', 'price':150.00, check:false}
    ];

    chickens  = [
        {'name':'chicken1', 'price':'190.00', check:false},
        {'name':'chicken2', 'price':'850.00', check:false},
        {'name':'chicken3', 'price':'200.00', check:false},
        {'name':'chicken4', 'price':'175.00', check:false},
        {'name':'chicken5', 'price':'450.00', check:false},
        {'name':'chicken6', 'price':'175.00', check:false},
        {'name':'chicken7', 'price':'700.00', check:false},
        {'name':'chicken8', 'price':'475.00', check:false},
        {'name':'chicken9', 'price':'960.00', check:false}
    ];

    paneers  = [
        {'name':'paneer1', 'price':'200.00', check:false},
        {'name':'paneer2', 'price':'150.00', check:false},
        {'name':'paneer3', 'price':'200.00', check:false},
        {'name':'paneer4', 'price':'250.00', check:false},
        {'name':'paneer5', 'price':'400.00', check:false},
        {'name':'paneer6', 'price':'150.00', check:false},
        {'name':'paneer7', 'price':'300.00', check:false},
        {'name':'paneer8', 'price':'675.00', check:false},
        {'name':'paneer9', 'price':'750.00', check:false}
    ];

    by:string = "asd";
    by1:number = 4;
    by2:Array<number> = [1,2,3,4,5,6,7,8,9];
    by3:boolean = true;
    by4:Object = {
        asd:"value"
    }
    by5:null = Object();

    public hi:Array<number>=[
       
    ];

    muttons  = [
        {'name':'mutton1', 'price':'600.00', check:false},
        {'name':'mutton2', 'price':'250.00', check:false},
        {'name':'mutton3', 'price':'400.00', check:false},
        {'name':'mutton4', 'price':'175.00', check:false},
        {'name':'mutton5', 'price':'950.00', check:false},
        {'name':'mutton6', 'price':'650.00', check:false},
        {'name':'mutton7', 'price':'640.00', check:false},
        {'name':'mutton8', 'price':'475.00', check:false},
        {'name':'mutton9', 'price':'650.00', check:false}
    ];

    eggs  = [
        {'name':'egg1', 'price':'150.00', check:false},
        {'name':'egg2', 'price':'150.00', check:false},
        {'name':'egg3', 'price':'175.00', check:false},
        {'name':'egg4', 'price':'175.00', check:false},
        {'name':'egg5', 'price':'120.00', check:false},
        {'name':'egg6', 'price':'100.00', check:false},
        {'name':'egg7', 'price':'100.00', check:false},
        {'name':'egg8', 'price':'100.00', check:false},
        {'name':'egg9', 'price':'150.00', check:false}
    ];

    sweets  = [
        {'name':'sweet1', 'price':'100.00', check:false},
        {'name':'sweet2', 'price':'150.00', check:false},
        {'name':'sweet3', 'price':'300.00', check:false},
        {'name':'sweet4', 'price':'175.00', check:false},
        {'name':'sweet5', 'price':'100.00', check:false},
        {'name':'sweet6', 'price':'150.00', check:false},
        {'name':'sweet7', 'price':'100.00', check:false},
        {'name':'sweet8', 'price':'175.00', check:false},
        {'name':'sweet9', 'price':'150.00', check:false}
    ];

    drinks  = [
        {'name':'drink1', 'price':'300.00', check:false},
        {'name':'drink2', 'price':'250.00', check:false},
        {'name':'drink3', 'price':'200.00', check:false},
        {'name':'drink4', 'price':'275.00', check:false},
        {'name':'drink5', 'price':'200.00', check:false},
        {'name':'drink6', 'price':'250.00', check:false},
        {'name':'drink7', 'price':'200.00', check:false},
        {'name':'drink8', 'price':'275.00', check:false},
        {'name':'drink9', 'price':'145.00', check:false}
    ];
    

    
   filteredItemPrice:number;
    hitCheckbox(name,price,filteredItemPrice){
        
        for(let i = 0; i < this.starters.length; i++){
            var totalPrice;
            if (this.starters[i].name === name) {

                this.starters[i].check=!this.starters[i].check;

                if(this.starters[i].check === true){
                    //debugger;
                   
                    this.filteredItemPrice = this.starters[i].price;
                    totalPrice += this.filteredItemPrice;
                    
                    

                    

                }
                /*else if (this.starters[i].check === false){
                    totalPrice -= this.starters[i].price;
                    this.filteredItemPrice -= this.starters[i].price;
                }*/
               // return this.filteredItemPrice = totalPrice;
                
            }
            /*if(this.starters[i].check === true ){
                console.log(this.filteredItemPrice += this.starters[i].price);
            }
            else if (this.starters[i].check === false ){
                console.log(this.filteredItemPrice += this.starters[i].price);
            }*/
            //return this.filteredItemPrice = totalPrice;
            console.log(totalPrice);
        }
        //console.log(this.filteredItemPrice);
        return this.filteredItemPrice;
        
    }
    
    
    filteredItemPrices(filteredItemPrice){
        return this.filteredItemPrice;
    }
   
    addItem(name,price){
        this.hitCheckbox(name,price,this.filteredItemPrice);
        
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