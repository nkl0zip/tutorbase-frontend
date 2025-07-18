import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseSectionComponent } from './showcase-section.component';

describe('ShowcaseSectionComponent', () => {
  let component: ShowcaseSectionComponent;
  let fixture: ComponentFixture<ShowcaseSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowcaseSectionComponent]
    });
    fixture = TestBed.createComponent(ShowcaseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
