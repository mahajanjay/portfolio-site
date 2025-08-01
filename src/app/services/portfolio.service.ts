import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private _skills: Skill[] = [
    { name: 'Angular', level: 90, icon: 'fab fa-angular' },
    { name: '.NET Core', level: 85, icon: 'fab fa-microsoft' },
    { name: 'SQL', level: 80, icon: 'fas fa-database' },
    { name: 'HTML5', level: 95, icon: 'fab fa-html5' },
    { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', level: 85, icon: 'fab fa-js' },
    { name: 'TypeScript', level: 85, icon: 'fab fa-js' },
    { name: 'Bootstrap', level: 90, icon: 'fab fa-bootstrap' },
    { name: 'Git', level: 80, icon: 'fab fa-git-alt' },
    { name: 'RESTful APIs', level: 85, icon: 'fas fa-server' }
  ];

  private _projects: Project[] = [
    {
      id: 1,
      title: 'TeDB Manager',
      description: '',
      technologies: ['Angular', '.NET Core', 'OAuth'],
      imageUrl: 'assets/images/project1.jpg',
      githubUrl: 'https://github.com/',
      liveUrl: 'https://example.com/'
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'A project management tool with task tracking, user assignments, and progress monitoring.',
      technologies: ['Angular', '.NET Core', 'SQL Server', 'SignalR', 'Material Design'],
      imageUrl: 'assets/images/project2.jpg',
      githubUrl: 'https://github.com/'
    }
  ];

  constructor() { }

  getSkills(): Skill[] {
    return this._skills;
  }

  getProjects(): Project[] {
    return this._projects;
  }

  getProject(id: number): Project | undefined {
    return this._projects.find(project => project.id === id);
  }
}
