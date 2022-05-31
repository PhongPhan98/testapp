import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRouting } from './admin-module-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, AdminModuleRouting],
})
export class AdminModule {}
