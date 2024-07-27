import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerDashboardFeedbacknumberComponent } from './lecturer-dashboard-feedbacknumber.component';

describe('LecturerDashboardFeedbacknumberComponent', () => {
  let component: LecturerDashboardFeedbacknumberComponent;
  let fixture: ComponentFixture<LecturerDashboardFeedbacknumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LecturerDashboardFeedbacknumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LecturerDashboardFeedbacknumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
