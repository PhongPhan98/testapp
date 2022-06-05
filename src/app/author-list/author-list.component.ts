import { Component, OnInit } from '@angular/core';
import { Author } from '../models/Author';
@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent implements OnInit {

  constructor() { }

  authors: Author[] = [
    {
      id: 1,
      name: 'phong',
      description: 'test'
    },
    {
      id: 2,
      name: 'phu',
      description: 'test'
    }
  ];

  ngOnInit(): void {
  }

}
