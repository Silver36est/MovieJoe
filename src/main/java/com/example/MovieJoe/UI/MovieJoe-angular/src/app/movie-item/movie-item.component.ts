import { Component, OnInit } from '@angular/core';
import {Movie} from "../models/movie/movie.model";
import {MovieJoeService} from "../services/movie-joe.service";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  movie: Movie = new Movie();
  movies: Array<Movie> = [];
  showMovie: boolean = false;
  showMovies: boolean = false;
  editMovieInfo: boolean = false;

  constructor(private movieService: MovieJoeService) { }

  ngOnInit(): void {
  }

  deleteMovie(movie: Movie) {
    this.movieService.onDeleteMovie(movie.id)
      .then((response) => {
        if (response.status === 200) {
          this.loadMoviesFromApi()
        }
      })
  }

  loadMoviesFromApi() {
    this.movieService.onShowMovieList()
      .then((response)=> response.json())
      .then((response)=> {
        this.movies = response;
      })
  }

  editMovie(movie: Movie) {
    this.movieService.onEditMovie(movie)
      .then((response) => response.json())
      .then((response) => {
        this.editMovieInfo = false;
        this.loadMoviesFromApi()
      })
  }

  openEditMovie() {
    this.editMovieInfo = true;
  }

  cancelEditSave() {
    this.editMovieInfo = false;
    this.movie.title = '';
    this.movie.genre = '';
    this.movie.releaseYear = '';
    this.movie.length = '';
    this.movie.description = '';
  }
}
