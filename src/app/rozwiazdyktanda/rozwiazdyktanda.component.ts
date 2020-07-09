import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Dyktando } from "../common/dyktanda.interface";
import { dyktandoDataService } from "./dyktandoData.service";
import {isString} from './isString'

@Component({
  selector: "app-rozwiazdyktanda",
  templateUrl: "./rozwiazdyktanda.component.html",
  styleUrls: ["./rozwiazdyktanda.component.scss"],
})
export class RozwiazdyktandaComponent implements OnInit,OnDestroy {
  id;
  document: Observable<Dyktando>;
  dyktando;
  isString;
  title:string|null
  
  constructor(
    private activatedRoute: ActivatedRoute,
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
      if(data!==null){        
        this.dyktando = data.content
        this.title = data.title
      }
      
    })
  }
  ngOnDestroy(){
    this.dyktandoData.checkAnswers = false
  }
  handleCheckAnswers(){
    this.dyktandoData.checkAnswers = true
  }
}
