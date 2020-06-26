import { Component, OnInit, ContentChild, ElementRef } from "@angular/core";
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { UserService } from "../../user.service";
import { appStateService } from "../../app-state.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  @ContentChild('elementRef',{static:true}) elementRed: ElementRef
  signUpForm: FormGroup;

  constructor(
    private userService: UserService,
    public state: appStateService
  ) {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.minLength(6),
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {}
  loginWithGoogle() {
    this.userService.login();
  }
  createAccount() {
    this.state.modalText.status = "createUser";
    this.state.modalOpen = true;
  }
  onSubmit() {
    if(this.signUpForm.valid){
      this.userService.loginWithEmail(
        this.signUpForm.value.email,
        this.signUpForm.value.password
      );
    }
    
  }
}
