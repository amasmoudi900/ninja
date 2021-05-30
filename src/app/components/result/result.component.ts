import { MatchService } from './../../services/match.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() matchInput:any;
  @Output() newMatches:EventEmitter<any> = new EventEmitter();
  constructor(
    private matchService:MatchService
  ) { }

  ngOnInit() {
  }

  compare(x,y){
    if (x>y) {
      return ['win', 'green'];
    } else if (x<y) {
      return ['loss', 'red'];
    } else {
      return ['draw', 'blue'];
    }
  }

  deleteMatch(id){
    this.matchService.deleteMatch(id).subscribe(
      (data)=> {
        console.log('data after delete', data.message);
        this.matchService.getAllMatches().subscribe(
          (data)=> {
            this.newMatches.emit(data.matches);
          }
        )
      }
    )
  }


}
