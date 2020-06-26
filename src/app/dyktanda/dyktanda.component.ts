import { Component, OnInit } from '@angular/core';
import {getData} from '../common/getData.service'
import {Dyktando} from '../common/dyktanda.interface'

@Component({
  selector: 'app-dyktanda',
  templateUrl: './dyktanda.component.html',
  styleUrls: ['./dyktanda.component.scss']
})
export class DyktandaComponent implements OnInit {
dyktanda:Dyktando[]
  constructor(private getdata :getData) {
    this.dyktanda = []
    getdata.dyktanda$.subscribe(data=>this.dyktanda=data)    
   }
  
  ngOnInit(): void {
    this.getdata.getDyktanda({limit:10})
  }

}
