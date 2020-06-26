import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StartComponent} from './start.component'
import {CommonModules} from '../common/common.module'




@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,CommonModules
  ]
})
export class StartModule {  
  
}
