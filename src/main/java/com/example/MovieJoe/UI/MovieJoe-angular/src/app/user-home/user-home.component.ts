import {Component, OnInit, ViewChild} from '@angular/core';
import {Movie} from "../models/movie/movie.model";
import {MovieJoeService} from "../services/movie-joe.service";

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  movie: Movie = new Movie();
  movies: Array<Movie> = [];
  showMovie: boolean = false;
  showMovies: boolean = false;

  constructor(private movieService: MovieJoeService) { }

  ngOnInit(): void {
  }

  saveMovie() {
    this.movieService.onSaveMovie(this.movie)
      .then((response)=> response.json())
      .then((response) => {
        this.showMovie = false;
        this.movie.title = '';
        this.movie.genre = '';
        this.movie.releaseYear = '';
        this.movie.length = '';
        this.movie.description = '';
      })
  }

  cancelSave() {
  this.showMovie = false;
  this.movie.title = '';
  this.movie.genre = '';
  this.movie.releaseYear = '';
  this.movie.length = '';
  this.movie.description = '';
  }

  showMovieList() {
    this.showMovies = !this.showMovies;
    this.loadMoviesFromApi();
  }

  loadMoviesFromApi() {
    this.movieService.onShowMovieList()
      .then((response)=> response.json())
      .then((response)=> {
        this.movies = response;
      })
  }

}
