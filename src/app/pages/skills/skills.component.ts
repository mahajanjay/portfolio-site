import { Component, OnInit } from '@angular/core';
import { PortfolioService, Skill } from '../../services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  frontendSkills: Skill[] = [];
  backendSkills: Skill[] = [];
  toolsSkills: Skill[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    const allSkills = this.portfolioService.getSkills();
    
    // Categorize skills
    this.frontendSkills = [
      { name: 'Angular', level: 90, icon: 'fab fa-angular' },
      { name: 'HTML5', level: 95, icon: 'fab fa-html5' },
      { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt' },
      { name: 'JavaScript', level: 85, icon: 'fab fa-js' },
      { name: 'TypeScript', level: 85, icon: 'fab fa-js' },
      { name: 'Bootstrap', level: 90, icon: 'fab fa-bootstrap' }
    ];
    
    this.backendSkills = [
      { name: '.NET Core', level: 85, icon: 'fab fa-microsoft' },
      { name: 'SQL Server', level: 80, icon: 'fas fa-database' },
      { name: 'Entity Framework', level: 80, icon: 'fas fa-database' },
      { name: 'RESTful APIs', level: 85, icon: 'fas fa-server' },
      { name: 'C#', level: 85, icon: 'fas fa-code' }
    ];
    
    this.toolsSkills = [
      { name: 'Git', level: 80, icon: 'fab fa-git-alt' },
      { name: 'Azure DevOps', level: 75, icon: 'fab fa-microsoft' },
      { name: 'Visual Studio', level: 85, icon: 'fas fa-code' },
      { name: 'VS Code', level: 90, icon: 'fas fa-code' },
      { name: 'Agile/Scrum', level: 80, icon: 'fas fa-users' }
    ];
  }
}
