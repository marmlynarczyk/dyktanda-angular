import {splitOnCurlyBrackets} from './splitOnCurlyBrackets'
import {toAnswerObj} from './toAnswerObj'
import {wholeWord} from './wholeWord.js'

class mainClass {
    constructor(array) {      
      this.isMainObj = true;
      this.subObjects = [...array];
      this.wholeWord = wholeWord(array);
      this.numberOfLetters = this.wholeWord.length;
    }
    isWordCorrect() {
      let isCorrect = true;
      this.subObjects.forEach(el => {
        if(el.correctAnswer !== el.selected){
          isCorrect = false
        }
      });
      return isCorrect;
    }    
  }

  

export const parseToObj = str => {
    if (!str.match("{")) {      
      return str;
    }

    const arrayOfObj = [];
    const splittedTxt = splitOnCurlyBrackets(str);
    
    splittedTxt.forEach(el => {
      if (el[0] !== "{") {
        arrayOfObj.push(el);
      } else {
        arrayOfObj.push(toAnswerObj(el));
      }
    });
    
    return new mainClass(arrayOfObj);
  };