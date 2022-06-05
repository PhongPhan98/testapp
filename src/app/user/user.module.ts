import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { UserRouting } from './user-routing.module';



@NgModule({
  imports: [
    CommonModule, FormsModule, UserRouting
  ],
  declarations: [UserComponent]
})
export class UserModule { }
