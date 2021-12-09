import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../models/user/user.model";
import {MovieJoeService} from "../services/movie-joe.service";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  editUserInfo: boolean = false;
  @Input() user: User = new User();

  constructor(private movieService: MovieJoeService) { }

  ngOnInit(): void {
  }

  saveUserInfo(user: User) {
    this.movieService.onUpdatingUserInfo(user)
      .then((response) => response.json())
      .then((response) => {
        this.user = response;
        this.editUserInfo = false;
      })
  }

  cancelEditMode(user: User) {
    this.movieService.onGettingUserInfoById(user.id)
      .then((response)=> response.json())
      .then((response)=> {
        this.user = response;
        this.editUserInfo = false;
      })
  }

}
