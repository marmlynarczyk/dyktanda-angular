export const findAll = (str,regex) =>{ 
    const founded = [];
  const matches = str.matchAll(regex);
  for (let match of matches) {
    founded.push({ value: match[0], index: match.index });
  }
  return founded;
}

