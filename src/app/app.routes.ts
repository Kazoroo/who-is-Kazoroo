import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ProjectsComponent} from './projects/projects.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {TavernFarkleProjectComponent} from './projects/tavern-farkle-project/tavern-farkle-project.component';
import {TriviagenProjectComponent} from './projects/triviagen-project/triviagen-project.component';

export const routes: Routes = [
  {path: "", component: AboutMeComponent},
  {
    path: "projects",
    component: ProjectsComponent,
    children: [
      {path: "tavern-farkle", component: TavernFarkleProjectComponent},
      {path: "triviagen", component: TriviagenProjectComponent},
    ]
  },
  {path: "**", component: AppComponent}
];
