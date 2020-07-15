import { findAll } from "./findAll";

export const hasSingleBrackets = (str:string):false|{index:number,length:number,msg:string} => {
  const errorMsg = {length:1,msg:'Nawias musi posiadać odpowiadającą parę'}
  let open:boolean|number = false;
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
