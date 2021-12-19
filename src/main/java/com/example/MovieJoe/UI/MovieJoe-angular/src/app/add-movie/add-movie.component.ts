import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from "../models/movie/movie.model";
import {MovieJoeService} from "../services/movie-joe.service";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  @Input() movie: Movie = new Movie();
  addMovie: boolean = false;
  movies: Array<Movie> = [];


  constructor(private movieService: MovieJoeService) { }

  ngOnInit(): void {
  }

  showAddMovieForm() {
    this.addMovie = !this.addMovie;
  }

  saveMovie(movie: Movie) {
    this.movieService.onSaveMovie(movie)
      .then((response)=> response.json())
      .then((response) => {
        this.addMovie = false;
        this.loadMoviesFromApi();
        this.emptyInputFields();
      })
  }

  cancelSave() {
    this.addMovie = false;
    this.emptyInputFields();
  }

  emptyInputFields() {
    this.movie.title = '';
    this.movie.genre = '';
    this.movie.releaseYear = '';
    this.movie.length = '';
    this.movie.description = '';
    this.movie.image= '';
  }

  loadMoviesFromApi() {
    this.movieService.onShowMovieList()
      .then((response)=> response.json())
      .then((response)=> {
        this.movies = response;
      })
  }
}
