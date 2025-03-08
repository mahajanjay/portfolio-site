import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private colorTheme: Theme = 'light';
  
  // Observable to allow components to react to theme changes
  private themeSubject = new BehaviorSubject<Theme>('light');
  theme$ = this.themeSubject.asObservable();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initTheme();
  }

  // Initialize theme from localStorage or system preference
  initTheme(): void {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      this.colorTheme = savedTheme;
    } else {
      // Check if user has set a system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.colorTheme = prefersDark ? 'dark' : 'light';
    }
    
    this.setTheme(this.colorTheme);
  }

  // Set the current theme
  setTheme(theme: Theme): void {
    this.colorTheme = theme;
    localStorage.setItem('theme', theme);
    
    // Remove previous theme class from body
    this.renderer.removeClass(document.body, 'light-theme');
    this.renderer.removeClass(document.body, 'dark-theme');
    
    // Add new theme class to body
    this.renderer.addClass(document.body, `${theme}-theme`);
    
    // Update observable
    this.themeSubject.next(theme);
  }

  // Toggle between light and dark themes
  toggleTheme(): void {
    const newTheme: Theme = this.colorTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  // Get current theme
  getCurrentTheme(): Theme {
    return this.colorTheme;
  }
} 