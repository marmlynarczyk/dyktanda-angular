import { Injectable } from "@angular/core";
export interface selectWhere {options:{value:string,label:string}[],currentValue:number,default:number}

@Injectable({providedIn:'root'})
export class dyktandaSelectOptions{
    classNum: selectWhere
    dLength: selectWhere
    tests: selectWhere
    sort: {options: {value:string[],label:string}[], currentValue:number}
    
    constructor(){
        this.classNum ={options: [
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4" },
            { value: "56", label: "5 - 6" },
            { value: "78", label: "7 - 8" },
            { value: "dorosli", label: "dla dorosłych" },
            { value: "all", label: "wszystkie" }
          ],currentValue:7,default:7};  

          this.dLength = {options:[
            { value: "short", label: "krótkie" },
            { value: "middle", label: "średnie" },
            { value: "long", label: "długie" },
            { value: "all", label: "wszystkie" }
          ],currentValue:3,default:3
        } 
        
        this.tests = {
            options:[
                { value: "u", label: "u / ó" },
                { value: "z", label: "rz / ż" },
                { value: "h", label: "ch / h" },
                { value: "all", label: "wszystko" }
              ],
              currentValue:3,default:3
        }

        this.sort = {
            options:[
                { value: ["added", "asc"], label: "data dodania - rosnąco" },
                { value: ["added", "desc"], label: "data dodania - malejąco" },
                { value: ["author", "asc"], label: "autor - od a do z" },
                { value: ["author", "desc"], label: "autor - od z do a" }
              ],
              currentValue:0
        }
    } 
     
    
      
}