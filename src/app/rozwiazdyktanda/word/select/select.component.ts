import { Component, OnInit, Input } from "@angular/core";
import { answerObj } from "../../../common/parseDyktanda/answer-obj";
import { dyktandoDataService } from "../../dyktandoData.service";
@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"],
})
export class SelectComponent implements OnInit {
  @Input() answerObj: answerObj;
  @Input() index1;
  @Input() index2;
  selected:number|null

  constructor(public dyktandoData: dyktandoDataService) {
     
  }

  ngOnInit(): void {
    this.dyktandoData.dyktando.subscribe((data) => {
      this.selected = data[this.index1].subObjects[this.index2].selected;
    });
  }
  handleClick(index: number) {    
    const newObj = this.dyktandoData.dyktando.value;
    let selected = newObj[this.index1].subObjects[this.index2].selected
    if(selected!==null){
      if(selected+1>=newObj[this.index1].subObjects[this.index2].answers.length){
        newObj[this.index1].subObjects[this.index2].selected = 0
      }else{
        newObj[this.index1].subObjects[this.index2].selected+=1 
      }

    }else{
      newObj[this.index1].subObjects[this.index2].selected = index;
    }
    this.dyktandoData.dyktando.next(newObj);
  }
}
