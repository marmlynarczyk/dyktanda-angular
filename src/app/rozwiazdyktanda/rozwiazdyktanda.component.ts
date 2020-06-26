import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { getData } from "../common/getData.service";
import { Observable } from "rxjs";
import { Dyktando } from "../common/dyktanda.interface";
import { dyktandoDataService } from "./dyktandoData.service";
import {isString} from './isString'

@Component({
  selector: "app-rozwiazdyktanda",
  templateUrl: "./rozwiazdyktanda.component.html",
  styleUrls: ["./rozwiazdyktanda.component.scss"],
})
export class RozwiazdyktandaComponent implements OnInit {
  id;
  document: Observable<Dyktando>;
  dyktando;
  isString;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private getDyktanda: getData,
    public dyktandoData: dyktandoDataService
  ) {
    this.isString = isString
    this.activatedRoute.params.subscribe((params) => {
      this.id = params["id"];
      this.dyktandoData.id.next(this.id)
    });
    
  }

  ngOnInit(): void {
    this.dyktandoData.dyktando.subscribe(data=>{
      this.dyktando = data
    })
  }
  handleCheckAnswers(){
    this.dyktandoData.checkAnswers = true
  }
}
