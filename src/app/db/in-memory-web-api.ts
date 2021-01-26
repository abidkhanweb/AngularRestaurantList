import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
    providedIn:'root'
})

export class InMemoryProductDatabase implements InMemoryDbService{
    createDb(){
        let favoriteList = [];
        let starter = [
            {id:1, name:'Paneer tikka', src:"../assets/starter/paneer-tikka.jpg", description:'Butter, cream, honey, salty cottage cheese, white cheese.', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100',favorite:false},
            {id:2, name:'Aloo tikki', src:"../assets/starter/aloo-tikki.jpg", description:'Butter, cream, honey, salty cottage cheese, white cheese.', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100',favorite:false},
            {id:3, name:'Mirchi bajji', src:"../assets/starter/onion-pakoda.jpg", description:'Butter, cream, honey, salty cottage cheese, white cheese.', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100',favorite:false},
            {id:4, name:'Dahi vada', src:"../assets/starter/dahi-vada.jpg", description:'Butter, cream, honey, salty cottage cheese, white cheese.', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100',favorite:false},
            {id:5, name:'Pani Puri', src:"../assets/starter/pani-puri.jpg", description:'Butter, cream, honey, salty cottage cheese, white cheese.', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100',favorite:false},
            {id:6, name:'Rava dhokla', src:"../assets/starter/rava-dhokla.jpg", description:'Butter, cream, honey, salty cottage cheese, white cheese.', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100',favorite:false},
            {id:7, name:'Veg cutlet', src:"../assets/starter/veg-cutlet.jpg", description:'Butter, cream, honey, salty cottage cheese, white cheese.', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100',favorite:false},
            {id:8, name:'French fries', src:"../assets/starter/french-fries.jpg", description:'Butter, cream, honey, salty cottage cheese, white cheese.', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100',favorite:false},
            {id:9, name:'Bhel Puri', src:"../assets/starter/bhelpuri.jpg", description:'Butter, cream, honey, salty cottage cheese, white cheese.', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100',favorite:false},
            {id:10, name:'Dal vada', src:"../assets/starter/dal-vada.jpg", description:'Butter, cream, honey, salty cottage cheese, white cheese.', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100',favorite:false},
            {id:11, name:'Hara bhara kabab', src:"../assets/starter/hara-bhara-kabab.jpg", description:'Butter, cream, honey, salty cottage cheese, white cheese.', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100',favorite:false},
            {id:12, name:'Dahi Puri', src:"../assets/starter/dahipuri.jpg", description:'Butter, cream, honey, salty cottage cheese, white cheese.', category:'Starter Course', availaiility:'Available', weight:'230 g', isVeg:'Yes', rating:'5', price:'$100',favorite:false}
          ];
          

          let chicken = [
            {id:1, name:'Chicken 1', src:"../assets/res-2.jpg", description:'Puff pastry, cheese filling, arugula, carrot, cucumber, radish.', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230'},
            {id:2, name:'Chicken 2', src:"../assets/res-2.jpg", description:'Puff pastry, cheese filling, arugula, carrot, cucumber, radish.', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230'},
            {id:3, name:'Chicken 3', src:"../assets/res-2.jpg", description:'Puff pastry, cheese filling, arugula, carrot, cucumber, radish.', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230'},
            {id:4, name:'Chicken 4', src:"../assets/res-2.jpg", description:'Puff pastry, cheese filling, arugula, carrot, cucumber, radish.', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230'},
            {id:5, name:'Chicken 5', src:"../assets/res-2.jpg", description:'Puff pastry, cheese filling, arugula, carrot, cucumber, radish.', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230'}
          ];


          let paneer = [
            {id:1, name:'Paneer Butter Masala',src:"../assets/paneer/paneer-butter-masala.jpg",  description:'Puff pastry, cheese filling, arugula, carrot, cucumber, radish.', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230',favorite:false},
            {id:2, name:'Palak Paneer',src:"../assets/paneer/palak-paneer.jpg",  description:'Puff pastry, cheese filling, arugula, carrot, cucumber, radish.', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230',favorite:false},
            {id:3, name:'Matar Paneer',src:"../assets/paneer/punjabi-matar-paneer.jpg",  description:'Puff pastry, cheese filling, arugula, carrot, cucumber, radish.', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230',favorite:false},
            {id:4, name:'Paneer Tikka',src:"../assets/paneer/paneer-tikka.jpg",  description:'Puff pastry, cheese filling, arugula, carrot, cucumber, radish.', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230',favorite:false},
            {id:5, name:'Paneer Lababdar',src:"../assets/paneer/paneer-lababdar.jpg",  description:'Puff pastry, cheese filling, arugula, carrot, cucumber, radish.', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230',favorite:false},
            {id:6, name:'Malai Kofta',src:"../assets/paneer/malai-kofta.jpg",  description:'Puff pastry, cheese filling, arugula, carrot, cucumber, radish.', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230',favorite:false},
            {id:8, name:'Kadai Paneer',src:"../assets/paneer/kadai-paneer.jpg",  description:'Puff pastry, cheese filling, arugula, carrot, cucumber, radish.', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230',favorite:false},
            {id:9, name:'Tawa Paneer Masala',src:"../assets/paneer/paneer-tava-masala.jpg",  description:'Puff pastry, cheese filling, arugula, carrot, cucumber, radish.', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230',favorite:false},
            {id:10, name:'Paneer Pasanda',src:"../assets/paneer/paneer-pasanda.jpg",  description:'Puff pastry, cheese filling, arugula, carrot, cucumber, radish.', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230',favorite:false},
            {id:11, name:'Paneer Makhanwala',src:"../assets/paneer/paneer-makhanwala.jpg",  description:'Puff pastry, cheese filling, arugula, carrot, cucumber, radish.', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230',favorite:false},
            {id:12, name:'Achari Paneer',src:"../assets/paneer/achari-paneer.jpg",  description:'Puff pastry, cheese filling, arugula, carrot, cucumber, radish.', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230',favorite:false},
            {id:13, name:'Shahi Paneer',src:"../assets/paneer/shahi-paneer.jpg",  description:'Puff pastry, cheese filling, arugula, carrot, cucumber, radish.', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230',favorite:false},
            {id:14, name:'Chilli Paneer Gravy',src:"../assets/paneer/chilli-paneer.jpg",  description:'Puff pastry, cheese filling, arugula, carrot, cucumber, radish.', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230',favorite:false},
            {id:15, name:'Paneer Bhurji',src:"../assets/paneer/paneer-bhurji.jpg",  description:'Puff pastry, cheese filling, arugula, carrot, cucumber, radish.', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230',favorite:false},
            {id:16, name:'Paneer Biryani',src:"../assets/paneer/paneer-biryani.jpg",  description:'Puff pastry, cheese filling, arugula, carrot, cucumber, radish.', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230',favorite:false},
            {id:17, name:'Paneer Kheer',src:"../assets/paneer/paneer-kheer.jpg",  description:'Puff pastry, cheese filling, arugula, carrot, cucumber, radish.', category:'Chicken Course', availaiility:'Not Available', weight:'450 g', isVeg:'Yes', rating:'4.5', price:'$230',favorite:false}
          ];
          return{starter,chicken,paneer,favoriteList}
    }
    
}