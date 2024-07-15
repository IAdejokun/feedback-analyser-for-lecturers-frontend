import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerNavComponent } from './lecturer-nav.component';

describe('LecturerNavComponent', () => {
  let component: LecturerNavComponent;
  let fixture: ComponentFixture<LecturerNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LecturerNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LecturerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
