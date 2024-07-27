import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeWordsComponent } from './relative-words.component';

describe('RelativeWordsComponent', () => {
  let component: RelativeWordsComponent;
  let fixture: ComponentFixture<RelativeWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelativeWordsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelativeWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
