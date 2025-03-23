import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('skillsAnimation', [
      transition('* => *', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.5s ease-out')
      ])
    ]),
    trigger('itemsAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(15px)' }),
          stagger(100, [
            animate('0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomeComponent {
  profile = {
    name: 'Komedja Kossi David',
    title: 'Full Stack Developer',
    description: 'Passionate developer with expertise in building modern web applications and software solutions across multiple platforms and technologies.'
  };

  skills = [
    {
      category: 'Programming Languages',
      items: ['C#', 'Java', 'JavaScript/TypeScript', 'HTML5', 'CSS3', 'PHP', 'Swift', 'SQL',]
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'Gitflow', 'VS Code', 'Microsoft Excel', 'Microsoft Word']
    },
    {
      category: 'Frameworks & Libraries',
      items: ['Angular 18', 'Java FX', 'Spring Boot', 'Bootstrap', 'ASP.NET']
    }
  ];

  experiences = [
    {
      title: 'Stage - Développeur Full Stack',
      company: 'Knoware',
      period: 'Février 2025 - Mai 2025',
      description: 'Analyse et développement d\'une solution cloud de supervision et d\'attribution de licences pour une application médicale. Technologies utilisées: Angular, Postman, C#',
      icon: '💼',
      color: '#007bff'
    }
  ];

  education = [
    {
      title: 'Bachelier en Informatique',
      institution: 'Helha',
      location: 'Montignies-sur-Sambre',
      period: '2022-2024',
      description: 'Orientation développement d\'application (Actuellement en dernière année)',
      icon: '🎓',
      color: '#28a745'
    },
    {
      title: 'CESS Sciences Informatique',
      institution: 'Institut Jean Jaurès',
      location: 'Charleroi',
      period: '2022',
      description: 'Certificat d\'Enseignement secondaire supérieur',
      icon: '📚',
      color: '#17a2b8'
    }
  ];

  // Add this to your component class
  ngAfterViewInit() {
    document.addEventListener('mousemove', (e) => {
      const cards = document.getElementsByClassName('card');
      for (const card of Array.from(cards)) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      }
    });
  }
}
