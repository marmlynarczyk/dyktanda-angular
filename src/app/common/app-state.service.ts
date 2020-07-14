import { Injectable } from "@angular/core";
@Injectable({ providedIn: "root" })
export class appStateService {
  mobile: boolean;
  navOpen: boolean;
  modalOpen: boolean;
  modalText: {
    status:
      | "messageSended"
      | "login"
      | "createUser"
      | "genericMsg"
      | "addDyktando";
    message: {
      header: string;
      paragraph: string;
    };
    error: boolean;
  };
  constructor() {
    this.mobile = false;
    this.navOpen = false;
    this.modalOpen = false;
    this.modalText = {
      status: "genericMsg",
      message: null,
      error: false,
    };
  }
  login(): void {
    this.modalText.status = "login";
    this.modalOpen = true;
  }
  createAccount(): void {
    this.modalText.status = "createUser";
    this.modalOpen = true;
  }
}
