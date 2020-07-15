import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from "@angular/core";
import { answerObj } from "../../common/parseDyktanda/answerObj";
import { dyktandoDataService } from "../dyktandoData.service";
import { isString } from "../isString";
import { mainClass } from "../../common/parseDyktanda/main-class";
@Component({
  selector: "app-hints",
  templateUrl: "./hints.component.html",
  styleUrls: ["./hints.component.scss"],
})
export class HintsComponent implements OnInit {
  @Input() index: number;
  answerObj: answerObj;
  mainClass!: mainClass;
  wrongAnswerWithComment: number[] = [];
  hasWrongAnswersAndComments = false;
  isString;
  constructor(public dyktandoData: dyktandoDataService) {
    this.isString = isString;
  }

  ngOnInit(): void {
    this.dyktandoData.dyktando.subscribe((data) => {
      this.wrongAnswerWithComment = [];
      this.mainClass = <mainClass>data.content[this.index];

      this.mainClass.subObjects.forEach((data, index) => {
        if (
          data.comment !== undefined &&
          data.selected !== null &&
          data.selected !== data.correctAnswer
        ) {
          this.hasWrongAnswersAndComments = true;
          this.wrongAnswerWithComment.push(index);
        }
      });
    });
  }
}
