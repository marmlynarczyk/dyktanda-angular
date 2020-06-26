import { Component, OnInit, Input } from '@angular/core';
import {isString} from '../isString'


@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {
@Input() word:any;
@Input() index1:number;
isString
  constructor() {
    this.isString = isString
   }

  ngOnInit(): void {
    
  }

}
