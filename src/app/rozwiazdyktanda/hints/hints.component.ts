import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import {answerObj} from '../../common/parseDyktanda/answer-obj'
import {dyktandoDataService} from '../dyktandoData.service'
import {isString} from '../isString'
import {mainClass} from '../../common/parseDyktanda/main-class'
@Component({
  selector: 'app-hints',
  templateUrl: './hints.component.html',
  styleUrls: ['./hints.component.scss']
})
export class HintsComponent implements OnInit {
@Input() index:number;
answerObj:answerObj
mainClass:mainClass
wrongAnswerWithComment:number[]=[]
hasWrongAnswersAndComments = false;
isString
  constructor(public dyktandoData:dyktandoDataService) {
    this.isString = isString
   }
  
  ngOnInit(): void {
    this.dyktandoData.dyktando.subscribe(data=>{
      
      this.wrongAnswerWithComment = []
      this.mainClass=data[this.index] 
         
      data[this.index].subObjects.forEach((data,index)=>{        
        if(data.comment!==undefined && data.selected!==null && data.selected !== data.correctAnswer){
          
          this.hasWrongAnswersAndComments = true
          this.wrongAnswerWithComment.push(index)
          
        }
        
      })
    })
    
  }
  

}

interface hasEmail{
  name: string;
  email:string    
}

interface log {
  (name:string):void
}
const some:log = (name)=>{}

type log2 = (name:string)=>void
const some2:log2 = (name)=>{}

some2("aaa")

interface hasEmailAndPhone extends hasEmail {
  phone:number
}

interface contactConstructor{
  new(name:string):{name:string}
}

interface phoneBook {
  [numberName:string] : undefined |{
      adress: string;
      code:number
  }
  home:undefined |{
    adress: string;
    code:number
};
}
const y:phoneBook = {
  home:{
    adress:'',
    code:4
  }
};

class Contact implements hasEmail{
  email:string;
  name:string;
  constructor(name:string,email:string){
    this.name = name;
    this.email = email;
  }
}


class newClass{
  private password:string;
  age:number
  constructor(password:string){
    
  }
}
