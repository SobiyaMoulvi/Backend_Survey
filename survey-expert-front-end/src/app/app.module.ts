import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatIconModule,} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule,} from '@angular/material/button';
import {MatCheckboxModule,} from '@angular/material/checkbox';
import {MatFormFieldModule,} from '@angular/material/form-field';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './AdminHomePage/admin-home/admin-home.component';
import { UserHomeComponent } from './UserHomePage/user-home/user-home.component';
import { PreviousSurveysComponent } from './Admin-ReviewPreviousSurvey/previous-surveys/previous-surveys.component';
import { CreateNewSurveyComponent } from './createSurvey/create-new-survey/create-new-survey.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HeaderComponent } from './header/header.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { AddQuestionsComponent } from './add-questions/add-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    UserHomeComponent,
    PreviousSurveysComponent,
    CreateNewSurveyComponent,
    RegisterUserComponent,
    HeaderComponent,
    AddQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
