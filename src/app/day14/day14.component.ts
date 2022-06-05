import { Component, Input, OnInit } from '@angular/core';
import { user } from '../models/User';

@Component({
  selector: 'app-day14',
  templateUrl: './day14.component.html',
  styleUrls: ['./day14.component.css']
})
export class Day14Component implements OnInit {
  @Input() user: user = {
    id: 1,
    username: 'phong',
    age: 15,
  };
  counter = 100;

  constructor() { }

  ngOnInit(): void {
  }

}
