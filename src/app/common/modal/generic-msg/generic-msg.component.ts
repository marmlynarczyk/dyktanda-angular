import { Component, OnInit } from '@angular/core';
import {appStateService} from '../../app-state.service'

@Component({
  selector: 'app-generic-msg',
  templateUrl: './generic-msg.component.html',
  styleUrls: ['./generic-msg.component.scss']
})
export class GenericMsgComponent {

  constructor(public state: appStateService) {
   
   }
}
