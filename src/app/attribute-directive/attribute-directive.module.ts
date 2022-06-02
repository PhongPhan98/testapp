import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributeDirectiveRoutingModule } from './attribute-directive-routing.module';
import { AttributeDirectiveComponent } from './attribute-directive.component';


@NgModule({
  declarations: [AttributeDirectiveComponent],
  imports: [
    AttributeDirectiveRoutingModule,
    CommonModule
  ]
})
export class AttributeDirectiveModule { }
