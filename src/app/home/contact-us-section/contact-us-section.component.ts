import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us-section',
  templateUrl: './contact-us-section.component.html',
  styleUrls: ['./contact-us-section.component.scss'],
})
export class ContactUsSectionComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    // Optionally, show a success toast, send data, etc.
    alert('Thank you for reaching out!');
  }
}
