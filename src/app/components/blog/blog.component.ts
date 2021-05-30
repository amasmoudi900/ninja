import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articles:any;
  constructor() { }

  ngOnInit() {
    this.articles = [
      {id:1, articleDate: "18/03/21", title: "Title 1", content: "Content 1"},
      {id:2, articleDate: "18/03/21", title: "Title 2", content: "Content 2"},
      {id:3, articleDate: "18/03/21", title: "Title 3", content: "Content 3"},
      {id:4, articleDate: "18/03/21", title: "Title 4", content: "Content 4"}
    ]
  }

}
