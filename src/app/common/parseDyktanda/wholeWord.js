export function wholeWord(arr){
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