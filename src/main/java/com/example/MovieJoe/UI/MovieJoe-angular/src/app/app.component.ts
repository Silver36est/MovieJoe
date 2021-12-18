import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MovieJoe';
  isLoggedIn: boolean = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
  }

  logOut() {
    sessionStorage.clear()
    this.router.navigate(['login']) .then(() => { location.reload(); });
  }



}
