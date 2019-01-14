import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'search'
})

export class SearchPipe implements PipeTransform {
    transform(starter: any[], term: any): any {
        // Return list if not any keyword
        if (!starter || !term) {
            return starter;
        }
        if(!starter.length){
            alert("Please click to append new user list");
        }
        // filter items array, items which match and return true will be
        return starter.filter(function(item:any){
            return /* Return name */ item.name.toLowerCase().includes(term.toLowerCase()) || 
                /* Price */ item.price.includes(term)
                 
        });
        
    }
}