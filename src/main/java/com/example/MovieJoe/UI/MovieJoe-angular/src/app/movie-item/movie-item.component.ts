import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from "../models/movie/movie.model";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie = new Movie();
  @Output() onDeleteMovie: EventEmitter<Movie> = new EventEmitter<Movie>();
  @Output() onEditMovie: EventEmitter<Movie> = new EventEmitter<Movie>();
  editMovieInfo: boolean = false;

  constructor() { }

  ngOnInit(): void {
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
