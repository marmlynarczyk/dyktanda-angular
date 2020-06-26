import { PipeTransform, Pipe } from '@angular/core';
 
@Pipe({
    name:'stringToBoxDate'
})
export class stringToBoxDate implements PipeTransform{
    boxDate;
    year;
    month;
    day
    transform(value:any){
        this.boxDate = new Date(value*1000)
        this.month = this.boxDate.getMonth()<11?"0"+(this.boxDate.getMonth()+1):this.boxDate.getMonth()        
        return [this.boxDate.getFullYear(),this.month,this.boxDate.getDate()].join('-')
    }
}


