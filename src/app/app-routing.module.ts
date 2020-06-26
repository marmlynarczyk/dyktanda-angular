import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from './start/start.component'
import {DyktandaComponent} from './dyktanda/dyktanda.component'
import {ZasadyComponent} from './zasady/zasady.component'
import {FaqComponent} from './faq/faq.component'
import {DodajDyktandoComponent} from './dodaj-dyktando/dodaj-dyktando.component'
import {KontaktComponent} from './kontakt/kontakt.component'



const routes:Routes  = [
  {path:'start', component:StartComponent },
  {path:'dyktanda', component:DyktandaComponent},
  {path:'zasady', component: ZasadyComponent},
  {path:'faq' , component: FaqComponent},
{path: 'dodaj',component:DodajDyktandoComponent},
{path:'kontakt', component: KontaktComponent},
{path: '',component:StartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
