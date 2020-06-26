import { hasSingleBrackets } from "./hasSingleBrackets";
import { findAll } from "./findAll";

const checkForError = (select, regex) => {  
  if (regex.regex.test(select.value) == regex.isError) {
    return { index: select.index, length: select.value.length, msg: regex.msg };
  }
  return false;
};

/**
 * Validate text
 * @return {object} 
 * @index {boolean} error index;
 * @length {number} length of error
 * @msg  {string} error message 
 */


export const textValidation = str => {
  let current = false;
  const selects = findAll(str, /{.+?}|{}/g);

  current = hasSingleBrackets(str);
  if (current) {
    return current;
  }
  const correctAnswer = {
    regex: /{(\s+)?\*(\s+)?[a-ząćęłóśżź.,!?:]|\|(\s+)?\*(\s+)?[a-ząćęłóśżź.,!?:]/i,
    isError: false,
    msg: "brak poprawnej odpowiedzi"
  };
  const hasOnlyOneCorrectAnswer = { regex: /\*.+?\*/g, isError: true };
  const hasMoreThanOneAnswer = {
    regex: /[a-ząćęłóśżź.,!?:](\s+)?\|(\s+)?[a-ząćęłóśżź.,!?:*]/i,
    isError: false,
    msg: "powinny być co najmniej 2 odpowiedzi"
  };
  const hasEmpyAnswers = {
    regex: /{(\s+)?(\*+)?\||\|(\s+)?(\*+)?}/,
    isError: true,
    msg: "odpowiedż musi zawierać treść"
  };
  const isEmpty = {
    regex : /{}/,
    isError:true,
    msg:'nie ma żadnej odpowiedzi'
  }

  const checks = [
    correctAnswer,
    hasOnlyOneCorrectAnswer,
    hasMoreThanOneAnswer,
    hasEmpyAnswers,
    isEmpty
  ];

  for (let c = 0; c < checks.length; ++c) {
    for (let s = 0; s < selects.length; ++s) {
      let isError = checkForError(selects[s], checks[c]);
      if (isError !== false) {
        return isError;
      }
    }
  }
  return "";
};
