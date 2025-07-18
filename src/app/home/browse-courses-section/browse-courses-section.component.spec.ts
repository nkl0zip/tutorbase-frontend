import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCoursesSectionComponent } from './browse-courses-section.component';

describe('BrowseCoursesSectionComponent', () => {
  let component: BrowseCoursesSectionComponent;
  let fixture: ComponentFixture<BrowseCoursesSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowseCoursesSectionComponent]
    });
    fixture = TestBed.createComponent(BrowseCoursesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
