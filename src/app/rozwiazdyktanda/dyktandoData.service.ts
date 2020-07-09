import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { getData } from "../common/getData.service";
import {Dyktando} from '../common/dyktanda.interface'
import {splitToWords} from '../common/parseDyktanda/splitToWords.js'
import {parseToObj} from '../common/parseDyktanda/parseToObj'
import {mainClass} from '../common/parseDyktanda/main-class'

@Injectable({providedIn:'root'})



export class  dyktandoDataService implements OnInit{
    id:BehaviorSubject<string|null>
    dyktando:BehaviorSubject<{content:(string|mainClass)[],title:string}>
    checkAnswers:boolean = false;
    constructor(private getDyktanda: getData,){
        this.dyktando = new BehaviorSubject(null)
        this.id = new BehaviorSubject(null)
        this.id.subscribe(data=>{
            if(data!==null){
                this.getDyktanda.getDocument(data).subscribe(dyktando=>{
                    const s1 = splitToWords(dyktando.content);
                    const s2 = s1.map((el:string) => parseToObj(el));                                       
                    this.dyktando.next({content:s2,title:dyktando.title})                })
            }
        })
    }
    ngOnInit(){
        
    }
}