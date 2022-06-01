import { Component, OnInit } from '@angular/core';
import { user } from './models/user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  userList: user[] = [
    {
      id: 1,
      username: "Phong.Phan",
      firstname: "Phan",
      lastname: "Phong",
      fullname: "Phan Phong"
    },
    {
      id: 2,
      username: "Phu.Phan",
      firstname: "Phan",
      lastname: "Phu",
      fullname: "Phan Phu"
    }
  ]
  ngOnInit(): void {
  }
}
