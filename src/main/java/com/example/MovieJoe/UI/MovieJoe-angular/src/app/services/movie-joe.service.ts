import { Injectable } from '@angular/core';
import {User} from "../models/user/user.model";

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
    return fetch(
      this.apiUrl + '/user',
      {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(user)
      }
    )
  }

}
