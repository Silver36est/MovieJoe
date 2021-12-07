import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../models/user/user.model";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  isInEditMode: boolean = false;
  @Input() user: User = new User();
  @Output() onUpdatingUserInfo: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  cancelEditMode() {

  }
}
