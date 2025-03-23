import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactInfo = {
    email: 'your.email@example.com',
    phone: '+1234567890',
    location: 'Belgium',
    availability: 'Open to opportunities'
  };

  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'fab fa-github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'fab fa-linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'fab fa-x-twitter' }
  ];
}
  
