import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { sendData } from "../common/sendData.service";

@Component({
  selector: "app-kontakt",
  templateUrl: "./kontakt.component.html",
  styleUrls: ["./kontakt.component.scss"],
})
export class KontaktComponent implements OnInit {
  kontaktForm: FormGroup;
  constructor(private firebase: sendData) {
    
  }

  ngOnInit(): void {
    this.kontaktForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, [Validators.required]),
    });
  }
  onSubmit() {
    this.kontaktForm.markAllAsTouched();   
    if (this.kontaktForm.valid) {
      this.firebase.addMessage({
        name: this.kontaktForm.value.name,
email: this.kontaktForm.value.email,
message: this.kontaktForm.value.message,
date: new Date(),
unread: true
      });
    }
  }
}
