import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from "../models/movie/movie.model";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  @Input() movie: Movie = new Movie();
  @Output() onSaveMovie: EventEmitter<Movie> = new EventEmitter<Movie>();


  constructor() { }

  ngOnInit(): void {
  }

  cancelSave() {
    this.movie.title = '';
    this.movie.genre = '';
    this.movie.releaseYear = '';
    this.movie.length = '';
    this.movie.description = '';
  }

}
