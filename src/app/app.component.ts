import { Component } from '@angular/core';
import {appStateService} from './common/app-state.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dyktanda';
  constructor(public state: appStateService){

  }
}
