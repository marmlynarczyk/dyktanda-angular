import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { UserService } from "../../user.service";
import { appStateService } from "../../app-state.service";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.scss"],
})
export class CreateUserComponent implements OnInit {
  createUserForm: FormGroup;
  passwdErrMsg: string;

  constructor(
    private userService: UserService,
    private state: appStateService
  ) {}

  ngOnInit(): void {
    this.createUserForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.min(6)]),
      repeatPassword: new FormControl(null, [
        Validators.required,
        Validators.min(6),
      ]),
    });
  }
  loginWithGoogle() {
  }
  onBlur() {
    if (
      this.createUserForm.value.password !==
        this.createUserForm.value.repeatPassword &&
      this.createUserForm.controls.password.touched &&
      this.createUserForm.controls.repeatPassword.touched
    ) {
      this.passwdErrMsg = "hasła nie są identyczne!";
    } else {
      this.passwdErrMsg = "hasło jest za krótkie!";
    }
  }
  createAccount() {}
  onSubmit() {
    if (this.createUserForm.valid) {
      this.userService.createUser(
        this.createUserForm.value.email,
        this.createUserForm.value.password
      );
    }
  }
}
