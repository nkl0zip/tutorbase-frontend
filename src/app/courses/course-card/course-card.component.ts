import { Component, Input } from '@angular/core';
import { Course } from '../courses-list/courses-list.component';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() image: string = '';
  @Input() tag: string = '';
  @Input() name: string = '';
  @Input() price: string = '';
  @Input() platform: string = '';

  @Input() course!: Course;
}
