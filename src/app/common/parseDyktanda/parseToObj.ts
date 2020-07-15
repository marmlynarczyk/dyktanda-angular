import {splitOnCurlyBrackets} from './splitOnCurlyBrackets'
import {toAnswerObj} from './toAnswerObj'
import {mainClass} from './main-class'


  

export const parseToObj = (str:string):mainClass|string => {
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