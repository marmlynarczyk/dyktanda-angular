import { Component, OnInit, Input, Pipe } from '@angular/core';




@Component({
  selector: 'app-dyktando-box',
  templateUrl: './dyktando-box.component.html',
  styleUrls: ['./dyktando-box.component.scss']
})
export class DyktandoBoxComponent implements OnInit {
  @Input() dyktando;

  constructor() { }

  ngOnInit(): void {
    
  }

}
