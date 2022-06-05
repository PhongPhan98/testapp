import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day14RoutingModule } from './day14-routing.module';
import { Day14Component } from './day14.component';


@NgModule({
  declarations: [Day14Component],
  imports: [
    CommonModule,
    Day14RoutingModule
  ]
})
export class Day14Module { }
