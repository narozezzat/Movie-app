import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { HomeComponent } from './home/home.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddMovieReactiveComponent } from './add-movie-reactive/add-movie-reactive.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    HomeComponent,
    AddMovieComponent,
    AboutUsComponent,
    NavbarComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    NotFoundComponent,
    AddMovieReactiveComponent,
    LogInComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
