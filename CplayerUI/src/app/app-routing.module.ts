import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatsComponent } from './stats/stats.component';
import { CalendarComponent } from './calendar/calendar.component';
import { StatOpenerComponent } from './stat-opener/stat-opener.component';
import { NewsComponent } from './news/news.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { RouteheplerComponent } from './routehepler/routehepler.component';

// declaring the routes here
const routes: Routes = [
  // making the login as the default path of the app
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  // path to login the dashboard component
  {
    path: 'dashboard',
    component: DashboardComponent,
    //once a user logs in he will be directed to login and will be able to access children paths
    children: [
      // making search as the default path of dashboard
      {
        path: '',
        redirectTo: 'stats',
        pathMatch: 'full'
      },
      // path of stat component
      {
        path: 'stats',
        component: StatsComponent
      },
      // path of calendar component
      {
        path: 'cal',
        component: CalendarComponent
      },
      // path for the news component
      {
        path: 'news',
        component : NewsComponent
      },
      {
        path: 'fav',
        component : FavouritesComponent
      },
      {
        path: 'help',
        component : RouteheplerComponent
      },
      // path of stats opener with providin the pid of the player clicked
      {
        path: 'statOpener/:pid/view',
        component: StatOpenerComponent,
        outlet: 'statOpener'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
