import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorListComponent } from './author-list.component';
import { AuthorDetailComponent } from '../author-detail/author-detail.component';
@NgModule({
  declarations: [AuthorListComponent, AuthorDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [AuthorListComponent]
})
export class AuthorListModule { }
