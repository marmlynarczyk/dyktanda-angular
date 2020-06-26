import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  DocumentChangeAction,
} from "@angular/fire/firestore";
import { map, switchMap } from "rxjs/operators";
import { Observable, Subject, BehaviorSubject } from "rxjs";
import { message } from "./message.inretface";
import { appStateService } from "./app-state.service";
import {Dyktando} from './dyktanda.interface'


@Injectable({ providedIn: "root" })
export class sendData {
  messageData: BehaviorSubject<string | null>;

  constructor(private afs: AngularFirestore, public state: appStateService) {
    this.messageData = new BehaviorSubject(null);
  }
  confirmation(header:string,paragraph:string,error?:boolean){
    return (data?:any)=>{         
      (this.state.modalOpen = true),
            (this.state.modalText = {
              status: "genericMsg",
              message: {
                header,
                paragraph
              },
              error:error?error:false,
            });
    }
  }

  addMessage(message) {
    this.afs
      .collection<message>("messages")
      .add(message)
      .then(
        this.confirmation("Dziękujemy!","Wiadomość została wysłana pomyślnie")
        ,this.confirmation("Przepraszamy!","Wystąpił nieznany błąd",true)        
      );
  }
  addDyktando(dyktando:Dyktando){
    this.afs.collection<Dyktando>('dyktanda').add(dyktando).then(
      this.confirmation("Dziękujemy!","Dyktando zostało dodane")
        ,this.confirmation("Przepraszamy!","Wystąpił błąd",true) 
    )
  }  
}
