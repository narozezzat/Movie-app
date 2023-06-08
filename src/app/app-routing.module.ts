import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { AddMovieReactiveComponent } from './add-movie-reactive/add-movie-reactive.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MoviesListComponent,
  },
  {
    path: 'add-movie',
    component: AddMovieComponent,
    canActivate: [authGuard]
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path:'movie-details/:id',
    component: MovieDetailsComponent
  },
  {
    path:'add-movie-reactive',
    component: AddMovieReactiveComponent
  },
  {
    path:"**",
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
