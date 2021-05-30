import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm:FormGroup;
  findedMatches:any;
  constructor(
    private fb:FormBuilder,
    private matchService:MatchService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      team:['']
    })
  }

  search(x){
    console.log('Here team one value', x);
    this.matchService.searchByTeamOne(x).subscribe(
      (data)=> {
        console.log('Searched from BE', data.searchedMatches);
        this.findedMatches = data.searchedMatches;
      }
    )
  }

}
