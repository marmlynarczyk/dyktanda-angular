import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { UserService } from "../../user.service";
import { appStateService } from "../../app-state.service";

@Component({
  selector: "app-login-bar",
  templateUrl: "./login-bar.component.html",
  styleUrls: ["./login-bar.component.scss"],
})
export class LoginBarComponent {
  user;

  constructor(public userService: UserService, private state: appStateService) {
    userService.user.subscribe((data) => {
      if (data) {
        this.user = data;
      } else {
        this.user = null;
      }
    });
  }
}
