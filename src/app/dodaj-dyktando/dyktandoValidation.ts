

export const dyktandoValidation = (str:string):string|{index:number,length:number,msg:string} => {

      
    const hasSingleBrackets = (str:string) => {
        const errorMsg = {length:1,msg:'Nawias musi posiadać odpowiadającą parę'}
        let open = false;
        const curlyBrackets = [...findAll(str, /{/g), ...findAll(str, /}/g)].sort(
          (a, b) => a.index - b.index
        );
        for (let c = 0; c < curlyBrackets.length; ++c) {
          let el = curlyBrackets[c];
          if (c % 2 === 0) {
            if (el.value !== "{") {
              return {...errorMsg ,index:el.index};
            } else {
              open = el.index;
            }
          } else {
            if (el.value !== "}") {
              return {...errorMsg ,index:el.index};
            } else {
              open = false;
            }
          }
        }
        if(open!==false){
          return {...errorMsg ,index:open}
        }
        return open;
      };


    const findAll = (str:string,regex:RegExp) =>{   
        const founded = [];
      const matches = str.matchAll(regex);
      for (let match of matches) {
        founded.push({ value: match[0], index: match.index });
      }
      return founded;
    }

    const checkForError = (select, regex) => {  
        if (regex.regex.test(select.value) == regex.isError) {
          return { index: select.index, length: select.value.length, msg: regex.msg };
        }
        return false;
      };

    let current 
    current = false;
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