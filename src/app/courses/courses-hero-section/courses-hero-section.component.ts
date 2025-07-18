import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-hero-section',
  templateUrl: './courses-hero-section.component.html',
  styleUrls: ['./courses-hero-section.component.scss'],
})
export class CoursesHeroSectionComponent {
  searchText: string = '';
}
