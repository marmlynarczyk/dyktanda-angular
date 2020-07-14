import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {RouterModule} from '@angular/router'

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HeroImgComponent } from "./hero-img/hero-img.component";
import { HamburgerComponent } from "./header/hamburger/hamburger.component";
import { LoginBarComponent } from "./header/login-bar/login-bar.component";
import { NavComponent } from "./header/nav/nav.component";
import { NavBarComponent } from "./header/nav-bar/nav-bar.component";
import { DyktandoBoxComponent } from './dyktando-box/dyktando-box.component';
import {stringToBoxDate} from './stringToBoxDate.pipe';
import { LoginComponent } from './modal/login/login.component';
import { CloseButtonComponent } from './modal/close-button/close-button.component';
import {DLengthToPlPipe} from './dyktando-box/dLengthToPl.pipe'


import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './modal/create-user/create-user.component';
import { GenericMsgComponent } from './modal/generic-msg/generic-msg.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';






@NgModule({
  declarations: [ 
    stringToBoxDate,   
    FooterComponent,
    HeaderComponent,
    HeroImgComponent,
    HamburgerComponent,
    LoginBarComponent,
    NavComponent,
    NavBarComponent,
    DyktandoBoxComponent,
    LoginComponent,
    CloseButtonComponent,    
    CreateUserComponent,
    GenericMsgComponent,
    CustomSelectComponent,   
    DLengthToPlPipe
  ],
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  exports:[FooterComponent,
    HeaderComponent,
    HeroImgComponent,
    HamburgerComponent,
    LoginBarComponent,
    NavComponent,
    NavBarComponent,
    DyktandoBoxComponent,
    stringToBoxDate,    
    LoginComponent,
    CreateUserComponent,
    GenericMsgComponent,
    CustomSelectComponent
    
    ]
})
export class CommonModules {}
