import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSurveyQuestionComponent } from './view-survey-question.component';

describe('ViewSurveyQuestionComponent', () => {
  let component: ViewSurveyQuestionComponent;
  let fixture: ComponentFixture<ViewSurveyQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSurveyQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSurveyQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
