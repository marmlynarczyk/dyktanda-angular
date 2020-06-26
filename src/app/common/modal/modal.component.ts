import { Component, OnInit } from "@angular/core";
import { appStateService } from "../app-state.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  constructor(public appState: appStateService) {}

  ngOnInit(): void {}
  closePopup(event) {    
    if (
      event.target.id === "modal" ||
      event.target.classList.contains("closePopup") ||
      event.target.classList.contains("closePopup-wrapper-button")
    )
      this.appState.modalOpen = false;
  }
}
