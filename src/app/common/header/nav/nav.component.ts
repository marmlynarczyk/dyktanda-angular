import { Component, OnInit } from '@angular/core';
import {appStateService} from '../../app-state.service'
import {linksService} from '../../links.service'


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  open;
  links;
  constructor(private appState: appStateService,private linksS:linksService) { }

  ngOnInit(): void {  
    this.open = this.appState;
    this.links = this.linksS.links
  }


}
