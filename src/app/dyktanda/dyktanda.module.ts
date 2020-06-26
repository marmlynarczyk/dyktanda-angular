import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DyktandaComponent} from './dyktanda.component'
import {dyktandaSelectOptions} from '../common/dyktandaSelectOptions.service';

import {getData} from '../common/getData.service'

import {CommonModules} from '../common/common.module'

@NgModule({
  declarations: [DyktandaComponent],
  imports: [
    CommonModule,CommonModules
  ]
})
export class DyktandaModule { 
 
}
