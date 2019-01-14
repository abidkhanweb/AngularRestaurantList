import { Component,Input,Pipe } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //providers: [MenulistService]
})
export class AppComponent {
  
  title = 'ngDashboard';

  changeText(){
    this.title ? "Hi Angular":"ngDashboard";
  }

  starters:any [];
  /*constructor (private _MenuListService : MenulistService){
    this.starters = _MenuListService.starters;
  }*/

  

  public hereos = ["IRONMAN", "CAPTAIN AMERICA","WONDER WOMAN","THOR","HULK","AQUAMAN"];
  onload(){
    
    window.onload = function() {
      
      var element = document.getElementsByClassName("div");
      var icon = document.getElementsByTagName("i");
        (function(){
          //var hereos = ["IRONMAN", "CAPTAIN AMERICA","WONDER WOMAN","THOR","HULK","AQUAMAN"];
          var i;
          var text = "";
         
          for(i=0;i<element.length;i++){
            //element[i].innerHTML=hereos[i];
            element[i].addEventListener("click",function(){
                
                if(this.children[0].classList.contains("fa-heart-o") && this.children[0].classList.contains("fa")){
                  this.children[0].classList.add("fa", "fa-heart", "red");
                  this.children[0].classList.remove("fa-heart-o");
                }
                else {
                  this.children[0].classList.add("fa", "fa-heart-o");
                  this.children[0].classList.remove("red","fa-heart");
                }
                
                if(text=="Hi"){
                  text="Bye";
                  console.log(text);
                }
                else{
                  text="Hi";
                  console.log(text);
                }
            })
          }
          
        
      })()
      

     
      
      
      

  
    }
  }
}

//let calls = new AppComponent();
//calls.onload();
