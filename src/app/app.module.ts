import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongsCardComponent } from './components/songs-card/songs-card.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { SearchComponent } from './pages/search/search.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    SongsCardComponent,
    TopNavComponent,
    HomeComponent,
    LoginComponent,
    PlaylistComponent,
    SearchComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
