import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KontaktComponent} from './kontakt.component'
import { ReactiveFormsModule} from '@angular/forms'




@NgModule({
  declarations: [KontaktComponent],
  imports: [
    CommonModule,      
    ReactiveFormsModule  
  ]
})
export class KontaktModule { }
