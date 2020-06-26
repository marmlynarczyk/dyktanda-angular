import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { auth } from "firebase/app";
import "firebase/auth";
import { AngularFireAuth } from "@angular/fire/auth";

import { appStateService } from "./app-state.service";

export interface userObj {
  email: string;
  displayName: string;
  uid: string;
  photoUrl: string;
}

@Injectable({ providedIn: "root" })
export class UserService {
  user: BehaviorSubject<userObj | null>;
  BehaviorSubject;

  constructor(public auth: AngularFireAuth, private state: appStateService) {
    this.user = new BehaviorSubject(null);
    this.auth.user.subscribe((data) => {
      if (data) {
        this.user.next({
          email: data.email,
          displayName: data.displayName || data.email,
          uid: data.uid,
          photoUrl: data.photoURL,
        });
      }
    });
  }
   errorMsg(errorMsg){ 
    this.state.modalText =  {
    status: "genericMsg",
    message:{
      header:"Wystąpił Błąd",
      paragraph:errorMsg
    },
    error:true
  }
  this.state.modalOpen = true; 
}

  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
      () => (this.state.modalOpen = false),
      (error) => console.log(error)
    );
  }
  logout() {
    this.auth.signOut().then((data) => this.user.next(null));
  }
  loginWithEmail(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password).then(
      ()=>{
        this.state.modalOpen = false;
      },
      error=>{
        console.log(error)
        if(error.code === "auth/invalid-email"){ 
          this.errorMsg("Podany adres email jest błędny")  
        }
        if(error.code === "auth/user-disabled"){ 
          this.errorMsg("To konto zostało zawieszone")  
        }
        if(error.code === "auth/user-not-found"){ 
          this.errorMsg("Nie ma takiego uzytkownika")  
        }
        if(error.code === "auth/wrong-password"){ 
          this.errorMsg("Podane hasło jest niepoprawne")  
        }
      } 

    );
  }
  createUser(email: string, password: string) {
    this.auth.createUserWithEmailAndPassword(email, password).then(
      () => {
        this.state.modalText =  {
          status: "genericMsg",
          message:{
            header:"Gratulacje!",
            paragraph:"Konto zostało utworzone."
          },
          error:false
      }
      this.state.modalOpen = true; 

        },
      (error) => {
        if(error.code === "auth/email-already-in-use"){ 
          this.errorMsg("Podany adres email jest już używany przez inne konto!")  
        }
        if(error.code ==="auth/invalid-email"){
          this.errorMsg("Podany adres email jest nieprawidłowy")  
        }
        if(error.code === 'auth/operation-not-allowed'){
          this.errorMsg("Nie można wykonać operacji")  
        }
        if(error.code ==='auth/weak-password'){
          this.errorMsg("Podane hasło jest za słabe") 
        }
      }
    );
  }
}
