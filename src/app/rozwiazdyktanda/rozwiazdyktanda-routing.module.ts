import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RozwiazdyktandaComponent } from './rozwiazdyktanda.component';


const routes: Routes = [
  {path:'dyktanda/:id', component:RozwiazdyktandaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RozwiazdyktandaRoutingModule { }
