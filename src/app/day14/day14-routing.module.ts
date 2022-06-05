import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Day14Component } from './day14.component';

const routes: Routes = [
  {
    path: '',
    component: Day14Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Day14RoutingModule { }
