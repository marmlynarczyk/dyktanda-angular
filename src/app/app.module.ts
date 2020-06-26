import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFireModule } from '@angular/fire';
import {environment} from '../environments/environment'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { CommonModules } from "./common/common.module";
import { DodajDyktandoModule } from "./dodaj-dyktando/dodaj-dyktando.module";
import { DyktandaModule } from "./dyktanda/dyktanda.module";
import { FaqModule } from "./faq/faq.module";
import { KontaktModule } from "./kontakt/kontakt.module";
import {StartModule} from './start/start.module'
import {ZasadyModule} from './zasady/zasady.module';
import { RozwiazdyktandaComponent } from './rozwiazdyktanda/rozwiazdyktanda.component'
import {RozwiazdyktandaModule} from './rozwiazdyktanda/rozwiazdyktanda.module'
import {ModalComponent} from './common/modal/modal.component';

@NgModule({
  declarations: [AppComponent, RozwiazdyktandaComponent,ModalComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    FormsModule,
    DyktandaModule,
    BrowserModule,
    AppRoutingModule,
    CommonModules,
    DodajDyktandoModule,
    FaqModule,
    KontaktModule,
    StartModule,
    ZasadyModule,
    RozwiazdyktandaModule,       
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
