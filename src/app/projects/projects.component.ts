import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-projects',
  imports: [
    NgOptimizedImage,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          maxHeight: '150px',
        })
      ),
      state(
        'closed',
        style({
          maxHeight: '0px',
          padding: '0px',
          borderWidth: '0px'
        })
      ),
      transition('open => closed', [animate('0.3s ease-in-out')]),
      transition('closed => open', [animate('0.3s ease-in-out')]),
    ])
  ]
})
export class ProjectsComponent {
  isAccordionActive = true

  toggleAccordion() {
    this.isAccordionActive = !this.isAccordionActive
  }
}
