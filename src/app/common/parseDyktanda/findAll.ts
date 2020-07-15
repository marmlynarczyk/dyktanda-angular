export const findAll = (str:string,regex:RegExp):{value:string,index:number}[] =>{ 
  const founded = [];
  const matches = str.matchAll(regex);
  for (let match of matches) {
    founded.push({ value: match[0], index: match.index });
  }
  return founded;
}