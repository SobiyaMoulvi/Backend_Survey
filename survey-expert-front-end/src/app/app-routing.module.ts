import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { PreviousSurveysComponent } from './Admin-ReviewPreviousSurvey/previous-surveys/previous-surveys.component';
import { AdminHomeComponent } from './AdminHomePage/admin-home/admin-home.component';
import { CreateNewSurveyComponent } from './createSurvey/create-new-survey/create-new-survey.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserHomeComponent } from './UserHomePage/user-home/user-home.component';
import { ViewSurveyQuestionComponent } from './view-survey-question/view-survey-question.component';
/* import { CheckboxComponent } from './widgets/checkbox/checkbox.component';
import { DemoComponent } from './widgets/demo/demo.component';
import { RadioComponent } from './widgets/radio/radio.component';
 */
const routes: Routes = [
  {path : '', redirectTo : 'login-signup',pathMatch : 'full'},
  {path : 'adminHome', component : AdminHomeComponent},
  {path : 'userHome', component : UserHomeComponent},
  {path : 'previousSurvey', component : PreviousSurveysComponent},
  {path : 'createSurvey', component : CreateNewSurveyComponent},
  {path : 'login-signup', component : RegisterUserComponent},
  {path : 'addQuestions', component : AddQuestionsComponent},
  {path: 'viewSurveyQuestion', component:ViewSurveyQuestionComponent}
  /* {path : 'addQuestions', component : RadioComponent},
  {path : 'checkbox', component:CheckboxComponent},
  {path:'demo',component:DemoComponent}
   */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
