import { Component, OnInit } from "@angular/core";
import { getData } from "../common/getData.service";
import { Dyktando } from "../common/dyktanda.interface";
import { Observable } from "rxjs";
import {featuresService} from './features.service'
@Component({
  selector: "app-start",
  templateUrl: "./start.component.html",
  styleUrls: ["./start.component.scss"],
})
export class StartComponent implements OnInit {
  
  dyktanda: Observable<Dyktando[]>;

  constructor(private getDyktanda: getData,public features:featuresService) {
    this.dyktanda = this.getDyktanda.dyktanda$;
  }

  ngOnInit(): void {   
    this.getDyktanda.getDyktanda({limit:3})     
  }
}
