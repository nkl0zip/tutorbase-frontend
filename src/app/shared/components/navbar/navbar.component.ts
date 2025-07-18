import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  // Scroll to Effect
  scrollToContact(event: Event) {
    event.preventDefault();
    this.closeMenu();

    if (this.router.url === '/home' || this.router.url === '/') {
      this.smoothScrollToContact();
    } else {
      this.router.navigate(['/home']).then(() => {
        setTimeout(() => this.smoothScrollToContact(), 150); // allow DOM to render
      });
    }
  }

  smoothScrollToContact() {
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
