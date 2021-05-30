import { MatchService } from './../../services/match.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  addMatchForm:FormGroup;
  match:any={};
  isCute:boolean = true;
  id:any;
  title:string;
  constructor(
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private matchService:MatchService,
    private router:Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.title= "Edit";
      this.matchService.getMatchById(this.id).subscribe(
        (data)=> {
          this.match = data.findedMatch;
        }
      )
    } else {
      this.title = "Add";
    }
    
    this.addMatchForm = this.formBuilder.group({
      teamOne:['', [Validators.maxLength(5),Validators.required]],
      teamTwo:['', Validators.minLength(3)],
      scoreOne:[''],
      scoreTwo:['']
    });
  }

  addOrEditMatch(x){
    if (this.id) {
      // Edit Match
      this.matchService.updateMatch(this.match).subscribe(
        (data)=> {
          console.log('Data after edit', data.message);
          this.router.navigate(['admin']);
        }
      );
    } else {
      // Add Match
      this.matchService.addMatch(this.match).subscribe();
    }
  }

  calcul(a,b){
    return a+b;
  }

}
