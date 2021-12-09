import {Component, OnInit} from '@angular/core';
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
  showMessage: boolean = false;
  isLoggedIn: boolean = false;
  currentUserName: string = '';
  currentPassword: string = '';

  constructor(private movieService: MovieJoeService,
              public router: Router) { }

  ngOnInit(): void {
  }

  onLogin(user: User) {
    this.movieService.findUserByNameAndPassword(user)
      .then((response) => {
        if (response.status === 200) {
          sessionStorage.setItem("isLoggedIn", String(true))
          sessionStorage.setItem("currentUserName", <string>this.user.userName)
          sessionStorage.setItem("currentPassword", <string>this.user.password)
          this.router.navigate(['home']).then(() => { location.reload(); });
        } else {
          this.showMessage = true;
        }
      })
  }

}
