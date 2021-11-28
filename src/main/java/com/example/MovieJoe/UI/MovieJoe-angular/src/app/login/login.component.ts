import { Component, OnInit } from '@angular/core';
import {User} from "../models/user/user.model";
import {MovieJoeService} from "../services/movie-joe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private movieService: MovieJoeService,
              public router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.movieService.findUserByNameAndPassword()
      .then((response)=> response.json())
      .then((response) => {
        this.router.navigate([''], {queryParams: { login: 'true' } });
      }).catch((error) => {
      console.log(error)
    })

  }
}
