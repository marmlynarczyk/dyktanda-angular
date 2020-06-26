import { Component, OnInit } from '@angular/core';
import {appStateService} from '../../app-state.service'

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {
  menuOpen;
  constructor(private appState: appStateService) { }

  ngOnInit(): void {
    this.menuOpen = this.appState
  }
  handleClick(){
    this.appState.navOpen = !this.appState.navOpen    
  }

}
