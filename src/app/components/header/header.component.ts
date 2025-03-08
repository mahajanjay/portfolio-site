import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Close navbar when route changes (for mobile)
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  }
  
  ngAfterViewInit(): void {
    // Ensure Bootstrap's JavaScript is properly initialized
    document.querySelectorAll('.navbar-toggler').forEach(toggler => {
      toggler.addEventListener('click', function(this: HTMLElement) {
        const target = this.getAttribute('data-bs-target');
        if (target) {
          const navbarCollapse = document.querySelector(target);
          if (navbarCollapse) {
            navbarCollapse.classList.toggle('show');
          }
        }
      });
    });
    
    // Add manual event listeners for nav links to close menu when clicked (for mobile)
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const navbarCollapse = document.getElementById('navbarNav');
        if (window.innerWidth < 992 && navbarCollapse && navbarCollapse.classList.contains('show')) {
          // Create and dispatch a click event on the toggler
          const toggler = document.querySelector('.navbar-toggler') as HTMLElement;
          if (toggler) {
            toggler.click();
          }
        }
      });
    });
  }
}
