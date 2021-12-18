import {Component, OnInit} from '@angular/core';
import {Movie} from "../models/movie/movie.model";
import {MovieJoeService} from "../services/movie-joe.service";
import {Router} from "@angular/router";
import {User} from "../models/user/user.model";

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit{
  movie: Movie = new Movie();
  user: User = new User();
  movies: Array<Movie> = [];
  showMovies: boolean = false;
  currentUserName: string | null = '';
  currentPassword: string | null = '';
  showUserInfo: boolean = false;

  constructor(private movieService: MovieJoeService,
              private router: Router) { }

  ngOnInit(): void {
    this.getUserInfo();
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

  getUserInfo() {
    this.currentUserName = sessionStorage.getItem("currentUserName");
    this.currentPassword = sessionStorage.getItem("currentPassword");
    let userX = new User();
    userX.userName = this.currentUserName;
    userX.password = this.currentPassword;
    this.movieService.findUserByNameAndPassword(userX)
      .then((response)=> response.json())
      .then((response)=> {
        this.showUserInfo = !this.showUserInfo;
        this.user = response;
      })
  }



}
