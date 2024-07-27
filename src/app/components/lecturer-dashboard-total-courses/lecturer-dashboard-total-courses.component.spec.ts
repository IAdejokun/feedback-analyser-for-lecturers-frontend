import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerDashboardTotalCoursesComponent } from './lecturer-dashboard-total-courses.component';

describe('LecturerDashboardTotalCoursesComponent', () => {
  let component: LecturerDashboardTotalCoursesComponent;
  let fixture: ComponentFixture<LecturerDashboardTotalCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LecturerDashboardTotalCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LecturerDashboardTotalCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
