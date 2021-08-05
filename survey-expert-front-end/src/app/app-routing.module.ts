import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviousSurveysComponent } from './Admin-ReviewPreviousSurvey/previous-surveys/previous-surveys.component';
import { AdminHomeComponent } from './AdminHomePage/admin-home/admin-home.component';
import { CreateNewSurveyComponent } from './createSurvey/create-new-survey/create-new-survey.component';
import { UserHomeComponent } from './UserHomePage/user-home/user-home.component';

const routes: Routes = [
  {path : '', redirectTo : 'adminHome',pathMatch : 'full'},
  {path : 'adminHome', component : AdminHomeComponent},
  {path : 'userHome', component : UserHomeComponent},
  {path : 'previousSurvey', component : PreviousSurveysComponent},
  {path : 'createSurvey', component : CreateNewSurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
