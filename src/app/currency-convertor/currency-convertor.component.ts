import { Component,Input,Pipe } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-currency-convertor',
  templateUrl: './currency-convertor.component.html',
  styleUrls: ['./currency-convertor.component.scss']
})
export class CurrencyConvertorComponent   {

    public crOne:string="0";
    public crTwo:string="0";
    public remainder:number=0;
    public result:number=0;
    
   
  total(){
    
    var total = (parseInt(this.crOne)*1000 + parseInt(this.crTwo)*500) ;
    debugger;
    if(total<2000){
      this.result=0;
      alert("Insufficient cash");
      return false;
    }
    else if (total%2000==0){
      this.result=total/2000;
    }
    else if (total%2000!=0){

      this.result=(Math.floor(total/2000));
      this.remainder=total%2000;
    }


     /*if(i % 2 == 1) {
        this.result = parseInt(this.crOne) + parseInt(this.crTwo);
      }
      else if(i % 2 == 0){
        
      }*/
   
    
    
    
  }
  


}
