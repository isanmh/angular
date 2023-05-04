import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// import { TeamsComponent } from './pages/teams/teams.component';
import { FeaturesComponent } from './pages/features/features.component';
import { TeamsComponent } from './pages/teams/teams.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'teams',
    component: TeamsComponent,
  },
  {
    path: 'features',
    component: FeaturesComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
