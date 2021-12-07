import {Component, OnInit} from '@angular/core';
import {Movie} from "../models/movie/movie.model";
import {MovieJoeService} from "../services/movie-joe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{
  movie: Movie = new Movie();
  movies: Array<Movie> = [];
  showMovie: boolean = false;
  showMovies: boolean = false;
  editMovieInfo: boolean = false;

  constructor(private movieService: MovieJoeService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    sessionStorage.clear()
    this.router.navigate(['login']) .then(() => { location.reload(); });
  }

  saveMovie() {
    this.movieService.onSaveMovie(this.movie)
      .then((response)=> response.json())
      .then((response) => {
        this.showMovie = false;
        this.loadMoviesFromApi();
        this.emptyInputFields();
      })
  }

  emptyInputFields() {
    this.movie.title = '';
    this.movie.genre = '';
    this.movie.releaseYear = '';
    this.movie.length = '';
    this.movie.description = '';
  }

  cancelSave() {
  this.showMovie = false;
  this.emptyInputFields();
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

  deleteMovie(movie: Movie) {
    this.movieService.onDeleteMovie(movie.id)
      .then((response) => {
        if (response.status === 200) {
          this.loadMoviesFromApi();
        }
      })
  }

  editMovie(movie: Movie) {
    this.movieService.onEditMovie(movie)
      .then((response) => response.json())
      .then((response) => {
        this.editMovieInfo = false;
        this.loadMoviesFromApi();
      })
  }



}
