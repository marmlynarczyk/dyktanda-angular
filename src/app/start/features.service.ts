import {Injectable} from "@angular/core"

@Injectable({providedIn:'root'})

export class featuresService{
     boxes = [
        {
          image: 'friends',
          header: "Dyktanda dla wszystkich",
          text: `Na naszej stronie znajdziesz dyktanda stworzone dla dzieci w różnym wieku, oraz dorosłych. Dyktanda podzielone są ze względu na wiek, regułę którą ćwiczymy w dyktandzie czy długość. 
        `,
          alt: "friends"
        },
        {
          image: 'pen',
          header: "Stwórz swoje dyktando",
          text:
            "Na naszej stronie znajdziesz dyktanda stworzone dla dzieci w różnym wieku, oraz dorosłych. Dyktanda podzielone są ze względu na wiek, regułę którą ćwiczymy w dyktandzie czy długość",
          alt: "pen"
        },
        {
          image: 'free',
          header: "Bezpłatne na zawsze",
          text:
            "Wychodzimy z założenia że dostęp do wiedzy zawsze powinien być bezpłatny. Dlatego nasza strona jest i na zawsze pozostanie bezpłatna.",
          alt: "free"
        },
        {
          image: 'beach',
          header: "ucz się bawiąc",
          text:
            "Nauka ortografii może być fajna, a nasza strona jest na to dowodem. Nie oceniamy, nie dajemy ograniczonego czasu, twoje zadowolenie jest dla nas najważniejsze.",
          alt: "fun"
        }
      ];
}