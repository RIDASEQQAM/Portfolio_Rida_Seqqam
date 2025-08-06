import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  featuredProjects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution built with Angular and Spring Boot.',
      image: 'assets/images/projects/ecommerce.jpg',
      link: 'https://github.com/RIDASEQQAM/ecommerce'
    },
    {
      title: 'Task Management App',
      description: 'A modern task management application with real-time updates.',
      image: 'assets/images/projects/taskmanager.jpg',
      link: 'https://github.com/RIDASEQQAM/taskmanager'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website built with Angular and Material Design.',
      image: 'assets/images/projects/portfolio.jpg',
      link: 'https://github.com/RIDASEQQAM/portfolio'
    }
  ];
}
