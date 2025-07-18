import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseFilterComponent } from './course-filter/course-filter.component';
import { CourseCardComponent } from './course-card/course-card.component';



@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailComponent,
    CourseFilterComponent,
    CourseCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
