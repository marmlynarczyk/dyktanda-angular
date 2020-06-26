export function wholeWord(arr:any):any{
    let word = "";
    arr.forEach(el => {
      if (typeof el === "string") {
        word += el;
      } else {
        word += el.answers[el.correctAnswer];
      }
    });
    return word;
  };