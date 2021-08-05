import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './AdminHomePage/admin-home/admin-home.component';
import { UserHomeComponent } from './UserHomePage/user-home/user-home.component';
import { PreviousSurveysComponent } from './Admin-ReviewPreviousSurvey/previous-surveys/previous-surveys.component';
import { CreateNewSurveyComponent } from './createSurvey/create-new-survey/create-new-survey.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    UserHomeComponent,
    PreviousSurveysComponent,
    CreateNewSurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
