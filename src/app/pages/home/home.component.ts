import { Component, OnInit } from '@angular/core';
import { PortfolioService, Project } from '../../services/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredProjects: Project[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    // Get the first 2 projects as featured projects
    this.featuredProjects = this.portfolioService.getProjects().slice(0, 2);
  }
}
