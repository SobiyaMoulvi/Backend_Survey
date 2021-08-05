import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './AdminHomePage/admin-home/admin-home.component';
import { UserHomeComponent } from './UserHomePage/user-home/user-home.component';

const routes: Routes = [
  {path : '', redirectTo : 'adminHome',pathMatch : 'full'},
  {path : 'adminHome', component : AdminHomeComponent},
  {path : 'userHome', component : UserHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
