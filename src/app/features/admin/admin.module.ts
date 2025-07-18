import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseManageComponent } from './course-manage/course-manage.component';
import { AnalyticsComponent } from './analytics/analytics.component';



@NgModule({
  declarations: [
    DashboardComponent,
    CourseManageComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
