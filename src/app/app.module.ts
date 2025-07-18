import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowseCoursesSectionComponent } from './home/browse-courses-section/browse-courses-section.component';
import { ShowcaseSectionComponent } from './home/showcase-section/showcase-section.component';
import { ContactUsSectionComponent } from './home/contact-us-section/contact-us-section.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { GlobalNavbarComponent } from './shared/components/global-navbar/global-navbar.component';
import { CoursesHeroSectionComponent } from './courses/courses-hero-section/courses-hero-section.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BrowseCoursesSectionComponent,
    ShowcaseSectionComponent,
    ContactUsSectionComponent,
    CoursesComponent,
    NotFoundComponent,
    GlobalNavbarComponent,
    CoursesHeroSectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
