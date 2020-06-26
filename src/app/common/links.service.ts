import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class linksService {
  links: { path: string; placeholder: string }[] = [
    { path: "/start", placeholder:"Start" },
    { path: "/dyktanda", placeholder:"Dyktanda" },
    { path: "/zasady", placeholder:"Zasady" },
    { path: "/faq", placeholder:"F.A.Q" },
    { path: "/dodaj", placeholder:"Dodaj dyktando" },
    { path: "/kontakt", placeholder:"Kontakt" },
  ];
}

