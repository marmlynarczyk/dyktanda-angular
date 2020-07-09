import { Component, OnInit, Input } from "@angular/core";
import { answerObj } from "../../../common/parseDyktanda/answer-obj";
import { dyktandoDataService } from "../../dyktandoData.service";
import {mainClass} from '../../../common/parseDyktanda/main-class'

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"],
})
export class SelectComponent implements OnInit {
  @Input() answerObj: answerObj;
  @Input() index1;
  @Input() index2;
  selected:number|null

  constructor(public dyktandoData: dyktandoDataService) {
     
  }

  ngOnInit(): void {
    this.dyktandoData.dyktando.subscribe((data) => {
      
        this.selected = (<mainClass>data.content[this.index1]).subObjects[this.index2].selected;
      
      
    });
  }
  handleClick(index: number) {    
    const newObj = this.dyktandoData.dyktando.value;
    let subObj:mainClass = <mainClass>newObj.content[this.index1]
    let selected = subObj.subObjects[this.index2].selected
    if(selected!==null){
      if(selected+1>=subObj.subObjects[this.index2].answers.length){
        subObj.subObjects[this.index2].selected = 0
      }else{
        subObj.subObjects[this.index2].selected+=1 
      }
    }else{
      subObj.subObjects[this.index2].selected = index;
    }
    this.dyktandoData.dyktando.next(newObj);
  }
}


interface hasEmail {
  name:string,
  email:string
}
let newObj:hasEmail = {
  name:"Damian",
  email:"someEmail"
}

interface hasEmailAndPhone extends hasEmail {
  phone:number
}
 let newOb:hasEmailAndPhone = {
  name:"Damian",
  email:"someEmail",
  phone:1234
 }