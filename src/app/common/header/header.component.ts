import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {appStateService} from '../app-state.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@ViewChild('headerRef',{static:true}) headerRef: ElementRef; 
  constructor(private appState: appStateService) { }

  ngOnInit(): void {
   
  }
}
