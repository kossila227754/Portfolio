import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
     
      githubLink: 'https://github.com/yourusername/ecommerce',
      liveDemo: 'https://ecommerce-demo.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      technologies: ['React', 'Firebase', 'Material-UI'],
      
      githubLink: 'https://github.com/yourusername/task-manager',
      liveDemo: 'https://task-manager-demo.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather monitoring dashboard with interactive maps',
      technologies: ['JavaScript', 'Weather API', 'Leaflet.js'],
      
      githubLink: 'https://github.com/yourusername/weather-dashboard',
      liveDemo: 'https://weather-dashboard-demo.com'
    }
  ];
}
