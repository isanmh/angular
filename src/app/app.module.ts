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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListContactsComponent } from './contacts/list-contacts/list-contacts.component';
import { EditContactsComponent } from './contacts/edit-contacts/edit-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    DasarAngularComponent,
    NavbarComponent,
    BannerComponent,
    HomeComponent,
    TeamsComponent,
    FeaturesComponent,
    ListContactsComponent,
    EditContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ini untuk http client
    HttpClientModule,
    // ini untuk form
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
