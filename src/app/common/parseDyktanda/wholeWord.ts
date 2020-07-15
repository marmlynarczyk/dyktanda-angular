import {answerObj} from './answerobj'
export function wholeWord(arr:(string|answerObj)[]):string{
    console.log('wholeword',arr)
    let word:string = "";
    arr.forEach(el => {
      if (typeof el === "string") {
        word += el;
      } else {
        word += el.answers[el.correctAnswer];
      }
    });
    return word;
  };