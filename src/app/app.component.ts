import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-site';
  
  constructor() {
    // Placeholder for images info
    console.log('Note: This app requires placeholder images to be added to assets/images folder');
    console.log('Create the following images:');
    console.log('- assets/images/developer.svg - Hero image for home page');
    console.log('- assets/images/about.svg - Image for about section on home page');
    console.log('- assets/images/profile.jpg - Profile photo for about page');
    console.log('- assets/images/project1.jpg to project4.jpg - Project images');
  }
}
