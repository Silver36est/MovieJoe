import {Component, OnInit} from '@angular/core';
import {MovieJoeService} from "../services/movie-joe.service";
import {Movie} from "../models/movie/movie.model";

@Component({
  selector: 'app-random-movie',
  templateUrl: './random-movie.component.html',
  styleUrls: ['./random-movie.component.css']
})
export class RandomMovieComponent implements OnInit{
  movie: Movie = new Movie();
  showMovie: boolean = false;

  constructor(private movieService: MovieJoeService) { }

  ngOnInit(): void {
  }

  onGetMovie() {
    this.movieService.getRandomMovie()
      .then((response) => response.json())
      .then((response) => {
        this.showMovie = true;
        this.movie = response;
      })
  }
}
