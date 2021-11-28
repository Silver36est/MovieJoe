import { Component, OnInit } from '@angular/core';
import {MovieJoeService} from "../services/movie-joe.service";
import {User} from "../models/user/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();

  constructor(private movieService: MovieJoeService,
              public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.movieService.registerUser(this.user)
      .then((response)=> response.json())
      .then((response) => {
        this.router.navigate(['login'], {queryParams: { registered: 'true' } });
      }).catch((error) => {
      console.log(error)
    })
  }
}
