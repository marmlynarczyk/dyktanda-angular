import {findAll} from "./findAll"

export const splitOnCurlyBrackets = str => {
    const strings = [];
    let temp = "";
    for (let c = 0; c < str.length; ++c) {
      if (str[c] === "{") {
        if (temp.length > 0) {
          strings.push(temp);
        }
        temp = str[c];
      } else if (str[c] === "}" || c === str.length - 1) {
        strings.push(temp + str[c]);
        temp = "";
      } else {
        temp += str[c];
      }
    }
    return strings;
  };



