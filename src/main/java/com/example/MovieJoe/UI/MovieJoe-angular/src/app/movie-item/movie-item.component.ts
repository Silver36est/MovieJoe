import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from "../models/movie/movie.model";
import {MovieJoeService} from "../services/movie-joe.service";

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

  constructor(private  movieService: MovieJoeService) { }

  ngOnInit(): void {
  }

  cancelEditSave(movie: Movie) {
    this.movieService.showMovieById(movie.id)
      .then((response)=> response.json())
      .then((response)=> {
        this.movie = response;
        this.editMovieInfo = false;
      })
  }

}
