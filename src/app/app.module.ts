import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DasarAngularComponent } from './dasar/dasar-angular/dasar-angular.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { FeaturesComponent } from './pages/features/features.component';

@NgModule({
  declarations: [AppComponent, DasarAngularComponent, NavbarComponent, BannerComponent, HomeComponent, TeamsComponent, FeaturesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
