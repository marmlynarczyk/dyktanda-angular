import { Component, OnInit } from "@angular/core";
import { dyktandoValidation } from "./dyktandoValidation.js";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { dyktandaSelectOptions } from "../common/dyktandaSelectOptions.service";
import { UserService, userObj } from "../common/user.service";
import { appStateService } from "../common/app-state.service";
import { findAll } from "../common/helpers/findAll";
import { Dyktando } from "../common/dyktanda.interface";
import { sendData } from "../common/sendData.service";

@Component({
  selector: "app-dodaj-dyktando",
  templateUrl: "./dodaj-dyktando.component.html",
  styleUrls: ["./dodaj-dyktando.component.scss"],
})
export class DodajDyktandoComponent implements OnInit {
  addDyktando: FormGroup;
  test = "abcdabcdaeertga";
  errorMsg: { part: string; code: string } | null;
  dyktando: Dyktando;
  userData: userObj | null;

  constructor(
    public state: appStateService,
    public tdyktandaSelectOptions: dyktandaSelectOptions,
    private user: UserService,
    private senddata: sendData
  ) {
    this.user.user.subscribe((data) => {
      this.userData = data;
      if (data && data.uid) {
        this.state.modalOpen = false;
      } else {
        this.state.modalOpen = true;
        this.state.modalText.status = "addDyktando";
      }
    });
  }

  ngOnInit(): void {
    this.addDyktando = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      classNum: new FormControl(
        this.tdyktandaSelectOptions.classNum.options[
          this.tdyktandaSelectOptions.classNum.default
        ].value
      ),
      tests: new FormControl(
        this.tdyktandaSelectOptions.tests.options[
          this.tdyktandaSelectOptions.tests.default
        ].value
      ),
      dyktando: new FormControl(),
    });
  }
  onSubmit(event) {
    if (this.addDyktando.controls.title.invalid) {
      this.errorMsg = {
        part: "",
        code: "Dyktando musi mieć tytuł",
      };
    } else {
      let start: number;
      let end: number;
      let spaces: [{ value: string; index: number }];
      spaces = findAll(this.addDyktando.value.dyktando, /\s/g);

      const validationResult = dyktandoValidation(
        this.addDyktando.value.dyktando
      );
      if (typeof validationResult !== "string") {
        for (let c = 0; c < spaces.length; ++c) {
          let currentS = spaces[c].index;
          if (currentS > validationResult.index && c === 0) {
            start = 0;
            end = currentS;
            break;
          }
          if (currentS > validationResult.index) {
            start = spaces[c - 1].index;
            end = currentS - start;
            break;
          }
          if (c === spaces.length - 1) {
            start = spaces[c - 1].index;
            end = this.addDyktando.value.dyktando.length - 1 - start;
          }
        }
        this.errorMsg = {
          part: this.addDyktando.value.dyktando.substr(start, end),
          code: validationResult.msg,
        };
      } else {
        /*SUBMITTING****************************/
        const dyktandoText = this.addDyktando.value.dyktando;
        let dLength = "short";
        if (dyktandoText > 300) {
          dLength = "middle";
        }
        if (dyktandoText > 500) {
          dLength = "long";
        }
        this.errorMsg = null;
        this.dyktando = {
          added: new Date(),
          author: this.userData.displayName,
          classNum: this.addDyktando.value.classNum,
          comments: "",
          content: this.addDyktando.value.dyktando,
          dLength,
          tests: this.addDyktando.value.tests,
          title: this.addDyktando.value.title,
          userUid: this.userData.uid,
        };
        this.senddata.addDyktando(this.dyktando);
      }
      event.preventDefault();
    }
  }
}
