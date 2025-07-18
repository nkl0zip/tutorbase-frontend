import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesHeroSectionComponent } from './courses-hero-section.component';

describe('CoursesHeroSectionComponent', () => {
  let component: CoursesHeroSectionComponent;
  let fixture: ComponentFixture<CoursesHeroSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesHeroSectionComponent]
    });
    fixture = TestBed.createComponent(CoursesHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
