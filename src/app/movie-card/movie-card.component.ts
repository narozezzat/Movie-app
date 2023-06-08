import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../interface/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movieDetails !: Movie;

  constructor(private router: Router){}

  redirectToDetails(){
    this.router.navigate(['movie-details' , this.movieDetails.id])
  }
}
