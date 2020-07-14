import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DodajDyktandoComponent} from './dodaj-dyktando.component'
import { ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [DodajDyktandoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DodajDyktandoModule { }
