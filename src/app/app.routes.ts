import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ProjectsComponent} from './projects/projects.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {TavernFarkleProjectComponent} from './projects/tavern-farkle-project/tavern-farkle-project.component';
import {TriviagenProjectComponent} from './projects/triviagen-project/triviagen-project.component';
import {WhoIsKazorooComponent} from './projects/who-is-kazoroo/who-is-kazoroo.component';

export const routes: Routes = [
  {path: "", component: AboutMeComponent},
  {
    path: "projects",
    component: ProjectsComponent,
    children: [
      {path: "", redirectTo: "tavern-farkle", pathMatch: "full"},
      {path: "tavern-farkle", component: TavernFarkleProjectComponent},
      {path: "triviagen", component: TriviagenProjectComponent},
      {path: "who-is-kazoroo", component: WhoIsKazorooComponent},
    ]
  },
  {path: "**", component: AppComponent}
];
