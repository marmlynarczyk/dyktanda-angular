import { Component, OnInit } from '@angular/core';
import {linksService} from '../../links.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  links;
  constructor(private linksS:linksService) { }

  ngOnInit(): void {   
    this.links = this.linksS.links
  }
}
