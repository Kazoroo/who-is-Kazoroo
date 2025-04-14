import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ProjectsComponent} from './projects/projects.component';
import {AboutMeComponent} from './about-me/about-me.component';

export const routes: Routes = [
  {path: "", component: AboutMeComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "**", component: AppComponent}
];
