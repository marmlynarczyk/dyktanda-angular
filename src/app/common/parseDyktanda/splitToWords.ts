import {findAll} from "./findAll"

export const splitToWords = (str:string):string[] =>{
    
    const regExp = /,|\.|\?\|\!|:|\n|\s|{|}/g
    const matches = findAll(str,regExp)
    const wordSplitters = [0]
    const words:string[] = []    

    let inside = false

    matches.forEach((data,index)=>{
      if(data.value === "{"){
        inside = true
      }else if(data.value ==="}"){
        inside = false
      }else if(inside ===false){
        if(data.value!==","&&data.value!=="."&&data.value!=="?"&&data.value!=="!"&&data.value!==":"){
          wordSplitters.push(data.index)
        }else{
          wordSplitters.push(data.index+1)
        } 
      }
    })

    wordSplitters.forEach((data,index)=>{
      let start = data;
      let end;
      if(index+1!==wordSplitters.length){
        end = wordSplitters[index+1]
      }else{
        end = str.length
      }
      let word = str.substring(start,end).trim()
      if(word!==""){
        words.push(word)
      }
            
    })
    return words 
  }