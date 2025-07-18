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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BrowseCoursesSectionComponent,
    ShowcaseSectionComponent,
    ContactUsSectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
