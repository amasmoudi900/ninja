import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles:any;
  hello:string = 'CrocoCoder';
  constructor() { }

  ngOnInit() {
    this.articles = [
      {id:1, name: "Ali", description:" Article description1"},
      {id:2, name: "Salah", description:" Article description2"},
      {id:3, name: "Karim", description:" Article description3"},
      {id:4, name: "Karim", description:" Article description3"}
    ];
  }

  calcul(){
    alert('hello');
  }

}
