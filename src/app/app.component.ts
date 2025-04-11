import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
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
export class AppComponent {
  isAccordionActive = true

  toggleAccordion() {
    this.isAccordionActive = !this.isAccordionActive
  }
}
