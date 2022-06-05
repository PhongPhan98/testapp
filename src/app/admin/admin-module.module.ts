import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRouting } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRouting,
    FormsModule],
  exports: [AdminComponent]
})
export class AdminModule { }
