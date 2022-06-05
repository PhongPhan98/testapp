import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature2Component } from './feature2.component';
import { Feature1Module } from '../feature1/feature1.module';



@NgModule({
  declarations: [Feature2Component],
  imports: [
    CommonModule,
    Feature1Module
  ]
})
export class Feature2Module { }
