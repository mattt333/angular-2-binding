import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  isShow = true;

  constructor() { }

  User = {
    name : 'Doe',
  firstName : 'John',
  age : 25,
  quote : 'tow beer or not to beer',
  photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  ngOnInit(): void {
  }

}
