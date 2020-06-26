import { Component,  Input } from '@angular/core';
import {dyktandaSelectOptions} from '../dyktandaSelectOptions.service'
import {getData} from '../getData.service'

export interface optionParams{
  value:string,
  label:string
}


@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent {
@Input() name:string
option:optionParams
  constructor(public dyktandaSelect: dyktandaSelectOptions, public getdata: getData) {
   
    
   }  
 handleChange(event){   
  
  if(this.name === "dLength"){    
    this.getdata.dLength$.next(this.dyktandaSelect[this.name].options[event.target.value].value)
  }
  if(this.name === "classNum"){
    this.getdata.classNum$.next(this.dyktandaSelect[this.name].options[event.target.value].value)
  }
  if(this.name === "tests"){
    this.getdata.tests$.next(this.dyktandaSelect[this.name].options[event.target.value].value)
  }
  if(this.name === "sort"){
    this.getdata.orderBy$.next({
      orderBy:this.dyktandaSelect[this.name].options[event.target.value].value[0],
      order:this.dyktandaSelect[this.name].options[event.target.value].value[1]
    })
  }
 }
}
