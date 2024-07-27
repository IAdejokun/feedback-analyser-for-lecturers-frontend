import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerDashboardTotalStudentsComponent } from './lecturer-dashboard-total-students.component';

describe('LecturerDashboardTotalStudentsComponent', () => {
  let component: LecturerDashboardTotalStudentsComponent;
  let fixture: ComponentFixture<LecturerDashboardTotalStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LecturerDashboardTotalStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LecturerDashboardTotalStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
