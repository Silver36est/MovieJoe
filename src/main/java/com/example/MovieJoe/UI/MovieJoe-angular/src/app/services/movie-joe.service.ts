import { Injectable } from '@angular/core';
import {User} from "../models/user/user.model";
import {Movie} from "../models/movie/movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieJoeService {

  apiUrl = 'http://localhost:8080/api';
  headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  constructor() { }

  getRandomMovie(): Promise<Response> {
    return fetch(this.apiUrl + '/random', {
      method: 'GET',
      headers: this.headers
    })
  }

  registerUser(user: User) {
    return fetch(this.apiUrl + '/user', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(user)
    })
  }

  findUserByNameAndPassword(user: User) {
    return fetch(
      this.apiUrl + '/user/check', {
        method: 'GET',
        headers: this.headers,
        body: JSON.stringify(user)
      })
  }

  onSaveMovie(movie: Movie) {
    return fetch(this.apiUrl + '/movie', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(movie)
    })
  }

  onShowMovieList() {
    return fetch(
      this.apiUrl + '/movies', {
        method: 'GET',
        headers: this.headers
      }
    )
  }

  onDeleteMovie(movieId: number | undefined) {
    return fetch(
      this.apiUrl + '/movie/delete/' + movieId, {
        method: 'DELETE',
        headers: this.headers
      })
  }

  onEditMovie(movie: Movie) {
    return fetch(
      this.apiUrl + '/movie/update/' + movie.id, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(movie)
      })
  }

}

