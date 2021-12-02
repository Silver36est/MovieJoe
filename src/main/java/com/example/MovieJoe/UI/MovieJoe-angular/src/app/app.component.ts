import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MovieJoe';
  isLoggedIn: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
  }


}
