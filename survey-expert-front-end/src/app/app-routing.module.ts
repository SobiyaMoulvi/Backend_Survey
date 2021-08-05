import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './AdminHomePage/admin-home/admin-home.component';

const routes: Routes = [
  {path : '', redirectTo : 'adminHome',pathMatch : 'full'},
  {path : 'adminHome', component : AdminHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
