import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RozwiazdyktandaRoutingModule } from './rozwiazdyktanda-routing.module';
import { WordComponent } from './word/word.component';
import { SelectComponent } from './word/select/select.component';
import { HintsComponent } from './hints/hints.component';


@NgModule({
  declarations: [WordComponent, SelectComponent, HintsComponent],
  imports: [
    CommonModule,
    RozwiazdyktandaRoutingModule
  ],
  exports:[WordComponent,HintsComponent]
})
export class RozwiazdyktandaModule { }
