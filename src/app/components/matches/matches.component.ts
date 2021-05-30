import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  name:string="here all matches";
  currentDate:Date;
  matches:any;
  constructor(
    private matchService:MatchService
  ) { }

  ngOnInit() {
    this.currentDate = new Date();
    this.matchService.getAllMatches().subscribe(
      (data)=> {
        this.matches = data.matches;
      }
    )
  }

  updateMatches(x){
    this.matches = x;
  }

}
