import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousSurveysComponent } from './previous-surveys.component';

describe('PreviousSurveysComponent', () => {
  let component: PreviousSurveysComponent;
  let fixture: ComponentFixture<PreviousSurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousSurveysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
