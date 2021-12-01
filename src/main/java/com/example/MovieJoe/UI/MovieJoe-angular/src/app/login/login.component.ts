import { Component, OnInit } from '@angular/core';
import {MovieJoeService} from "../services/movie-joe.service";
import {Router} from "@angular/router";
import {User} from "../models/user/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  showMessage: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private movieService: MovieJoeService, public router: Router) { }

  ngOnInit(): void {
  }

  onLogin(user: User) {
    this.movieService.findUserByNameAndPassword(user)
      .then((response) => {
        if (response.status === 200) {
          this.router.navigate(['home'], {queryParams: {login: 'true'} });
          this.isLoggedIn = true;
        } else {
          this.showMessage = true;
        }
      })
  }
}
