import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  matches:any;
  constructor(
    private router:Router,
    private matchService:MatchService) { }

  ngOnInit() {
    this.matchService.getAllMatches().subscribe(
      (data)=>{
        console.log('here data from BE', data.matches);  
         this.matches = data.matches;
      }
    );
  }

  goToInfo(x:any){
    this.router.navigate([`match-info/${x}`]);
  }

  deleteMatch(a:any){
    this.matchService.deleteMatch(a).subscribe(
      (data)=>{
        console.log('data after delete', data.message);
        
        this.matchService.getAllMatches().subscribe(
          (data)=>{
            console.log('here data from BE', data.matches);  
             this.matches = data.matches;
          }
        )
      }
    );
  }
  
  goToEdit(z:any){
    this.router.navigate([`edit-match/${z}`]);
  }

}
