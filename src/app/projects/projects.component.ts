import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-projects',
  imports: [
    NgOptimizedImage,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  isAccordionActive = true

  toggleAccordion() {
    this.isAccordionActive = !this.isAccordionActive
  }
}
