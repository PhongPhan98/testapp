import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin-module/admin/admin.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: 'app/admin-module/admin-module.module#AdminModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
