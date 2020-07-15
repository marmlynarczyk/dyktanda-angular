export class answerObj {
    answers:string[]
    comment:string
    correctAnswer:number
    selected:null|number
  constructor(answers:string[], comment:string, correctAnswer:number) {
    this.answers = answers;
    this.comment = comment;
    this.correctAnswer = correctAnswer;
    this.selected = null;
  }
  isAnswerCorrect():boolean {
      return  this.selected=== this.correctAnswer    
  }
}
