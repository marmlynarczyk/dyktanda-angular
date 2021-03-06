import {findAll} from './findAll'
import {answerObj} from './answerObj'

export const toAnswerObj = (str:string):answerObj =>{
  let answers = [],comment,correctAnswer
  const isComment = str=>{
      return /\#/.test(str)
  }
  const isCorrectAnswer = str =>{
      return /\*/.test(str) 
  }
  const splitters  = findAll(str,/\||#/g)
  const splitIndex = splitters.map(data=>data.index)
  splitIndex.unshift(0)    
  const parts = splitIndex.map((start,index)=>{
      let end;
      if(index === splitIndex.length-1){
          end = str.length
      }else{
          end = splitIndex[index+1]
      }
  return str.substring(start,end)
  })

  parts.forEach(data=>{
      if(isComment(data)){
          comment = data.replace(/\#|\{|\}/g,"")
      }else{
          if(isCorrectAnswer(data)){                
              correctAnswer = answers.push(data.replace(/\||\*|\s|{|}/g,''))-1
          }else{
              answers.push(data.replace(/\||\*|\s|{|}/g,""))
          }
      }
  })
  return new answerObj(answers,comment,correctAnswer) 
}
  