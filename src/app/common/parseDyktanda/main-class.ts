import {wholeWord} from '../parseDyktanda/wholeWord'


export class mainClass {
    isMainObj:boolean;
    subObjects:any
    wholeWord:string
    numberOfLetters:number
    constructor(array) {      
      this.isMainObj = true;
      this.subObjects = [...array];
      this.wholeWord = wholeWord(array);
      this.numberOfLetters = this.wholeWord.length;
    }
    isWordCorrect():boolean {
      let isCorrect = true;
      this.subObjects.forEach(el => {
        if(el.correctAnswer !== el.selected){
          isCorrect = false
        }
      });
      return isCorrect;
    }    
  }
