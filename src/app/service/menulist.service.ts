import { Injectable } from "@angular/core";

@Injectable()

// This is a local service called, it is not necessary to define @injectable decorator, you can comment

export class MenulistService{


    starters:any = [
        { id:1, name: 'starter1', price: '300.00', check: false },
        { id:2, name: 'starter2', price: '150.00', check: false },
        { id:3, name: 'starter3', price: '300.00', check: false },
        { id:4, name: 'starter4', price: '175.00', check: false },
        { id:5, name: 'starter5', price: '500.00', check: false },
        { id:6, name: 'starter6', price: '150.00', check: false },
        { id:7, name: 'starter7', price: '600.00', check: false },
        { id:8, name: 'starter8', price: '475.00', check: false },
        { id:9, name: 'starter9', price: '150.00', check: false },
        { id:10, name: 'starter10', price: '100.00', check: false }
    ];

    chickens:any = [
        { id:1, name: 'chicken1', price: '190.00', check: false },
        { id:2, name: 'chicken2', price: '850.00', check: false },
        { id:3, name: 'chicken3', price: '200.00', check: false },
        { id:4, name: 'chicken4', price: '175.00', check: false },
        { id:5, name: 'chicken5', price: '450.00', check: false },
        { id:6, name: 'chicken6', price: '175.00', check: false },
        { id:7, name: 'chicken7', price: '700.00', check: false },
        { id:8, name: 'chicken8', price: '475.00', check: false },
        { id:9, name: 'chicken9', price: '960.00', check: false }
    ];

    paneers:any = [
        { id:1, name: 'paneer1', price: '200.00', check: false },
        { id:2, name: 'paneer2', price: '150.00', check: false },
        { id:3, name: 'paneer3', price: '200.00', check: false },
        { id:4, name: 'paneer4', price: '250.00', check: false },
        { id:5, name: 'paneer5', price: '400.00', check: false },
        { id:6, name: 'paneer6', price: '150.00', check: false },
        { id:7, name: 'paneer7', price: '300.00', check: false },
        { id:8, name: 'paneer8', price: '675.00', check: false },
        { id:9, name: 'paneer9', price: '750.00', check: false }
    ];

    muttons:any = [
        { id:1, name: 'mutton1', price: '600.00', check: false },
        { id:2, name: 'mutton2', price: '250.00', check: false },
        { id:3, name: 'mutton3', price: '400.00', check: false },
        { id:4, name: 'mutton4', price: '175.00', check: false },
        { id:5, name: 'mutton5', price: '950.00', check: false },
        { id:6, name: 'mutton6', price: '650.00', check: false },
        { id:7, name: 'mutton7', price: '640.00', check: false },
        { id:8, name: 'mutton8', price: '475.00', check: false },
        { id:9, name: 'mutton9', price: '650.00', check: false }
    ];

    eggs:any = [
        { id:1, name: 'egg1', price: '150.00', check: false },
        { id:2, name: 'egg2', price: '150.00', check: false },
        { id:3, name: 'egg3', price: '175.00', check: false },
        { id:4, name: 'egg4', price: '175.00', check: false },
        { id:5, name: 'egg5', price: '120.00', check: false },
        { id:6, name: 'egg6', price: '100.00', check: false },
        { id:7, name: 'egg7', price: '100.00', check: false },
        { id:8, name: 'egg8', price: '100.00', check: false },
        { id:9, name: 'egg9', price: '150.00', check: false }
    ];

    sweets:any = [
        { id:1, name: 'sweet1', price: '100.00', check: false },
        { id:2, name: 'sweet2', price: '150.00', check: false },
        { id:3, name: 'sweet3', price: '300.00', check: false },
        { id:4, name: 'sweet4', price: '175.00', check: false },
        { id:5, name: 'sweet5', price: '100.00', check: false },
        { id:6, name: 'sweet6', price: '150.00', check: false },
        { id:7, name: 'sweet7', price: '100.00', check: false },
        { id:8, name: 'sweet8', price: '175.00', check: false },
        { id:9, name: 'sweet9', price: '150.00', check: false }
    ];

    drinks:any = [
        { id:1, name: 'drink1', price: '300.00', check: false },
        { id:2, name: 'drink2', price: '250.00', check: false },
        { id:3, name: 'drink3', price: '200.00', check: false },
        { id:4, name: 'drink4', price: '275.00', check: false },
        { id:5, name: 'drink5', price: '200.00', check: false },
        { id:6, name: 'drink6', price: '250.00', check: false },
        { id:7, name: 'drink7', price: '200.00', check: false },
        { id:8, name: 'drink8', price: '275.00', check: false },
        { id:9, name: 'drink9', price: '145.00', check: false }
    ];


    constructor(){
        return this.starters + this.paneers + this.chickens + this.drinks + this.eggs + this.muttons + this.sweets
    }


    getStarter(){
        return this.starters
    }

    getChicken(){
        return this.chickens
    }

    getPaneer(){
        return this.paneers
    }

    getMutton(){
        return this.muttons
    }

    getEgg(){
        return this.eggs
    }

    getSweet(){
        return this.sweets
    }

    getDrink(){
        return this.drinks
    }

    
    
}