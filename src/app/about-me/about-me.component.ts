import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {animate, state, style, transition, trigger} from '@angular/animations';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-about-me',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
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
export class AboutMeComponent {
  isAccordionActive = true

  toggleAccordion() {
    this.isAccordionActive = !this.isAccordionActive
  }
}
